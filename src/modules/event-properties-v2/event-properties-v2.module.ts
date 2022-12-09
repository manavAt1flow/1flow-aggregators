import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { EventPropertiesV2Service } from './event-properties-v2.service';

@Module({
  imports: [CommonModule],
  providers: [EventPropertiesV2Service],
  exports: [EventPropertiesV2Service]
})
export class EventPropertiesV2Module {
  
}
