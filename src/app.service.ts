import { Injectable } from '@nestjs/common';
import { AwsSqsService } from './common/aws-sqs/aws-sqs.service';
import { DistinctEventsService } from './modules/distinct-events/distinct-events.service';
import { PropertiesService } from './modules/properties/properties.service';
const cron = require('node-cron');
@Injectable()
export class AppService {
  constructor(
    private sqsService: AwsSqsService,
    private propertiesService: PropertiesService,
    private distinctEventService: DistinctEventsService
  ) {
    cron.schedule('*/1 * * * * *', async () => {
      this.sqsService.receiveData(async (data)=>{
        await this.propertiesService.aggregate(data);
        await this.distinctEventService.distinctEvent(data);
      });
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
