import { Module } from '@nestjs/common';
import { AnalyticsEventService } from './analytics-event.service';
import { CommonModule } from 'src/common/common.module';
import { AnalyticsUserModule } from '../analytics-user/analytics-user.module';

@Module({
  imports:[CommonModule, AnalyticsUserModule],
  providers: [AnalyticsEventService],
  exports: [AnalyticsEventService]
})
export class AnalyticsEventModule {}
