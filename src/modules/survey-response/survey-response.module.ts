import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { AnalyticsEventModule } from '../analytics-event/analytics-event.module';
import { AnalyticsUserModule } from '../analytics-user/analytics-user.module';
import { SurveyResponse } from './survey-response';
import { SurveyResponseService } from './survey-response.service';

@Module({
    imports:[ 
      CommonModule,
      AnalyticsEventModule, 
    ],
    providers: [SurveyResponse, SurveyResponseService],
    exports:[SurveyResponse, SurveyResponseService]
  })
export class SurveyResponseModule {}
