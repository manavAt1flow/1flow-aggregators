import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AwsSqsService } from 'src/common/aws-sqs/aws-sqs.service';
import { EventPropertiesV2, EventPropertiesV2Document } from 'src/common/entity/event-properties-v2.entity';
const cron = require('node-cron');

@Injectable()
export class EventPropertiesV2Service {
    constructor(
        @InjectModel(EventPropertiesV2.name) private eventPropertiesV2Model: Model<EventPropertiesV2Document>,
        private sqsService: AwsSqsService
    ) {
        this.aggregateEvent = this.aggregateEvent.bind(this)
        cron.schedule('*/1 * * * * *', () => {
            this.sqsService.receiveData(this.aggregateEvent);
        });
    }

    public async aggregateEvent(event) {
        console.log("Received event._id", event._id,event.event);
        await this.eventPropertiesV2Model.updateOne({
            project_id: event.project_id,
            user_id: event.user_id,
            event: event.event
        }, {
            project_id: event.project_id,
            user_id: event.user_id,
            event: event.event,
            $inc: { count: 1 },
            $setOnInsert: {
                'first_occurred': event.created_at
            },
            last_occurred: event.created_at,
        }, { upsert: true });
    }
}
