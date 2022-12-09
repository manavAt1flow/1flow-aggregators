import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SurveyResponse, SurveyResponseDocument } from 'src/common/entity/survey-response.entity';

@Injectable()
export class SurveyResponseService {
    constructor(
        @InjectModel(SurveyResponse.name) private surveyResponseModel: Model<SurveyResponseDocument>,
    ) { }
}
