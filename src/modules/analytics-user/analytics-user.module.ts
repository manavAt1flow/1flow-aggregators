import { Module } from '@nestjs/common';
import { AnalyticsUserService } from './analytics-user.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  providers: [AnalyticsUserService],
  exports: [AnalyticsUserService]
})
export class AnalyticsUserModule {}
