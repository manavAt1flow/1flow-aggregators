import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AnalyticsUser, AnalyticsUserDocument } from 'src/common/entity/analytics-user.entity';

@Injectable()
export class AnalyticsUserService {
    constructor(@InjectModel(AnalyticsUser.name) private analyticsUserModel: Model<AnalyticsUserDocument>) {}
}
