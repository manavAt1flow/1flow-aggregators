import { Body, Controller, HttpStatus, Param, Post, Res, UseInterceptors, Version } from '@nestjs/common';
import { ApiHeader, ApiHeaders, ApiTags } from '@nestjs/swagger';
import { APP_VERSION_V2 } from 'src/app.constant';
import { KeyInterceptor } from 'src/common/middleware/key.interceptor';
import { CreateProjectSurveyDto, ProJectIDParamsDTO } from './project-survey.dto';
import { ProjectSurveyService } from './project-survey.service';

@ApiHeaders([
    {
      name: 'Accept-Version',
      allowEmptyValue: false,
      enum: [APP_VERSION_V2],
      required: true,
    }
])
@ApiTags('project-survey')
@Controller('project-survey')
@ApiHeader({
    name: 'one_flow_key',
    description: 'A Custom Header'
})
export class ProjectSurveyController {
    constructor(private readonly projectSurveyService: ProjectSurveyService) { }

    // @Post('/:project_id')
    // @UseInterceptors(KeyInterceptor)
    // @Version(APP_VERSION_V2)
    // async createAccountUser(@Param() params: ProJectIDParamsDTO, @Body() projectSurvey: CreateProjectSurveyDto) {
    //     console.log(projectSurvey, params);
    //     const {
    //         name,
    //         description,
    //         platforms,
    //         style,
    //         screens,
    //         trigger_event_name,
    //         survey_settings,
    //     } = projectSurvey;

    //     const newProjectSurvey = await this.projectSurveyService.create({
    //         project_id: params.project_id,
    //         name,
    //         description,
    //         platforms,
    //         style,
    //         screens,
    //         trigger_event_name,
    //         survey_settings,
    //         start_date: new Date().valueOf(),
    //     });
    //     return newProjectSurvey;
    // }

    async getProjectSurveys(project_id:string, fields?: string){
        return this.projectSurveyService.find(project_id, fields);
    }
}
