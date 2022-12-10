import { Injectable, OnModuleInit } from '@nestjs/common';
import { DistinctEvents, DistinctEventsDocument } from 'src/common/entity/distinct-event.entity';
import { Properties, PropertiesDocument } from 'src/common/entity/properties.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
const cron = require('node-cron');

@Injectable()
export class DistinctEventsService {
    constructor(
        @InjectModel(DistinctEvents.name) private propertiesModel: Model<DistinctEventsDocument>,
    ) {
        this.distinctEvent = this.distinctEvent.bind(this)
    }

    public async distinctEvent(data) {
        if(!data.hasOwnProperty('event')){
            return;
        }
        
        const properties = Object.keys(data.properties || {}) as string[];
        console.log({
            project_id: new Types.ObjectId(data.project_id),
            code_name: data.event,
            $addToSet: {
                event_properties: { $each: properties } 
            }
        });
        const resu = await this.propertiesModel.updateOne({
            project_id: new Types.ObjectId(data.project_id),
            code_name: data.event,
        }, {
            project_id: new Types.ObjectId(data.project_id),
            code_name: data.event,
            $addToSet: {
                event_properties: { $each: properties } 
            }
        }, { upsert: true });
        console.log(resu);
    }
}
