import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { SurveyResponse, SurveyResponseDocument } from 'src/common/entity/survey-response.entity';
import { ProjectSurvey, ProjectSurveyDocument } from '../../common/entity/project-survey.entity';

import { CreateProjectSurveyDto } from './project-survey.dto';

@Injectable()
export class ProjectSurveyService {
     constructor(
          @InjectModel(ProjectSurvey.name) private projectSurveyModel: Model<ProjectSurveyDocument>,
          @InjectModel(SurveyResponse.name) private surveyResponseModel: Model<SurveyResponseDocument>
     ) { }

     async create(projectSurvey: CreateProjectSurveyDto): Promise<ProjectSurvey> {
          const newProjectSurvey = new this.projectSurveyModel(projectSurvey);
          return await newProjectSurvey.save();
     }

     async find(project_id, fields?: string): Promise<ProjectSurvey[]> {
          return await this.projectSurveyModel.find({
               project_id: new Types.ObjectId(project_id)
          }, fields).sort({ created_on: 'desc' })
     }

     async findById(_id, fields?: string): Promise<ProjectSurvey> {
          return await this.projectSurveyModel.findOne({
               _id: new Types.ObjectId(_id)
          }, fields)
     }

     async getResponses(survey_id): Promise<any> {
          return await this.surveyResponseModel.find({
               survey_id: new Types.ObjectId(survey_id)
          })
     }

     async findAll(survey_ids:string[]) {
          return await this.projectSurveyModel.find({
               _id: {
                    $in: survey_ids
               }
          });
     }

}
