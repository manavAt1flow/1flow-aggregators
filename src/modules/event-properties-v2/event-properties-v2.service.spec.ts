import { Test, TestingModule } from '@nestjs/testing';
import { EventPropertiesV2Service } from './event-properties-v2.service';

describe('EventPropertiesV2Service', () => {
  let service: EventPropertiesV2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventPropertiesV2Service],
    }).compile();

    service = module.get<EventPropertiesV2Service>(EventPropertiesV2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
