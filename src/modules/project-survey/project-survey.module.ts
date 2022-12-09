import { Module } from '@nestjs/common';
import { ProjectSurveyService } from './project-survey.service';
import { ProjectSurveyController } from './project-survey.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports:[CommonModule],
  providers: [ProjectSurveyService],
  controllers: [ProjectSurveyController],
  exports:[ProjectSurveyService]
})
export class ProjectSurveyModule {}
