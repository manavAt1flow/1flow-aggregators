import { MiddlewareConsumer, Module, NestModule, OnModuleInit, RequestMethod, Type } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { AccountModule } from './modules/account/account.module'
import { AnalyticsUserModule } from './modules/analytics-user/analytics-user.module';
import { AnalyticsEventModule } from './modules/analytics-event/analytics-event.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { DistinctEventsModule } from './modules/distinct-events/distinct-events.module';

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
    PropertiesModule,
    DistinctEventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
