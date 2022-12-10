import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { PropertiesService } from './properties.service';

@Module({
  imports: [CommonModule],
  providers: [PropertiesService],
  exports: [PropertiesService]
})
export class PropertiesModule {}
