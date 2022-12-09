import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { AnalyticsEventDocument, AnalyticsEvent } from 'src/common/entity/analytics-event.entity';
import { AnalyticsEventService } from './analytics-event.service';

describe('AnalyticsEventService', () => {
  let service: AnalyticsEventService , model: Model<AnalyticsEventDocument>;
  const event = {
    "_id":"62c678adad2302d24ac5e292",
    "analytics_user_id": "62c678adad2302d24ac5e291",
    "event": "click",
    "timestamp": 2343234,
    "properties": {
      "message": "hello"
    },
    "project_id": "62c678adad2302d24ac5e291",
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: getModelToken(AnalyticsEvent.name),
        useValue: Model
      },
      AnalyticsEventService],
    }).compile();

    model = module.get<Model<AnalyticsEventDocument>>(getModelToken(AnalyticsEvent.name));
    service = module.get<AnalyticsEventService>(AnalyticsEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('insertMany', async () => {
    jest.spyOn(model, 'insertMany').mockResolvedValueOnce([event]);
    const d = await service.insertMany([event]);
    expect(d).toEqual([event]);
  });

  it('deleteOne', async () => {
    jest.spyOn(model, 'deleteOne').mockResolvedValueOnce({
      "acknowledged": true,
      "deletedCount": 0
    });
    const d = await service.deleteOne(event._id);
    expect(d).toEqual({
      "acknowledged": true,
      "deletedCount": 0
    });
  });

  it('deleteMany', async () => {
    jest.spyOn(model, 'deleteMany').mockResolvedValueOnce({
      "acknowledged": true,
      "deletedCount": 2
    });
    const d = await service.deleteMany({});
    expect(d).toEqual({
      "acknowledged": true,
      "deletedCount": 2
    });
  });
});
