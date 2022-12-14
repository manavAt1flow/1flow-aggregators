import { MiddlewareConsumer, Module, NestModule, OnModuleInit, RequestMethod, Type } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { AccountModule } from './modules/account/account.module'
import { AnalyticsUserModule } from './modules/analytics-user/analytics-user.module';
import { AnalyticsEventModule } from './modules/analytics-event/analytics-event.module';
import { ProjectSurveyModule } from './modules/project-survey/project-survey.module';
import { SurveyResponseModule } from './modules/survey-response/survey-response.module';
import { EventPropertiesV2Module } from './modules/event-properties-v2/event-properties-v2.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    CommonModule,
    AccountModule,
    AnalyticsUserModule,
    AnalyticsEventModule,
    ProjectSurveyModule,
    SurveyResponseModule,
    EventPropertiesV2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
