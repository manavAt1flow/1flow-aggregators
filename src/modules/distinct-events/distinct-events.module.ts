import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DistinctEventsService } from './distinct-events.service';

@Module({
  imports: [CommonModule],
  providers: [DistinctEventsService],
  exports: [DistinctEventsService]
})
export class DistinctEventsModule {}
