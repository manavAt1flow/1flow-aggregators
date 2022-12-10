import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AwsSqsService } from 'src/common/aws-sqs/aws-sqs.service';
import { AnalyticsUser, AnalyticsUserDocument } from 'src/common/entity/analytics-user.entity';

@Injectable()
export class AnalyticsUserService {
    constructor(
        @InjectModel(AnalyticsUser.name) private analyticsUserModel: Model<AnalyticsUserDocument>,
        private readonly awsSqsService: AwsSqsService
    ) {
        // analyticsUserModel.watch().on('change', async (data: any) => {
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
