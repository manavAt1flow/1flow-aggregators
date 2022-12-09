import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AwsSqsService } from 'src/common/aws-sqs/aws-sqs.service';
import { AnalyticsEvent, AnalyticsEventDocument } from 'src/common/entity/analytics-event.entity';

@Injectable()
export class AnalyticsEventService {
    constructor(
        @InjectModel(AnalyticsEvent.name) private analyticsEventModel: Model<AnalyticsEventDocument>,
        private readonly awsSqsService: AwsSqsService
    ) {
        // analyticsEventModel.watch().on('change', async (data: any) => {
        //     if(data.operationType = 'insert'){
        //         if(!data.fullDocument?._id){
        //             return;
        //         }
        //         console.log(data.operationType);
        //         console.log(data.fullDocument._id);
        //         this.awsSqsService.sendData(null, null, data.fullDocument);
        //     }
        // });
    }
}
