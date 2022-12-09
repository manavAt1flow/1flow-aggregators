import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, QueryWithHelpers, UpdateWriteOpResult } from 'mongoose';
import { AnalyticsUser, AnalyticsUserDocument } from 'src/common/entity/analytics-user.entity';
import { AnalyticsUserService } from './analytics-user.service';

describe('AnalyticsUserService', () => {
  let model: Model<AnalyticsUserDocument>, service: AnalyticsUserService;

  const analyticsUser = {
    "_id": "62c8fee4dac6ee05e0d6bf20",
    "project_id": "62c5b2538ab2d3000ed75b44",
    "user_id": "2342342434",
    "identified": true,
    "context": {
      "_id": "62c8fee4dac6ee05e0d6bf21",
      "app": {
        "version": "1",
        "build": "1"
      },
      "device": {
        "manufacturer": "Xiomi",
        "model": "1"
      },
      "library": {
        "name": null,
        "version": null
      },
      "location": {
        "country": "India",
        "region": null,
        "city": "Mumbai"
      },
      "network": {
        "carrier": null,
        "wifi": false
      },
      "os": {
        "name": "windows",
        "version": "1"
      },
      "screen": {
        "width": 566,
        "height": 567,
        "type": ""
      }
    },
    "timestamp": 1657339620695,
    "deleted_at": null,
    "deleted": false,
    "created_at": 1657339620697,
    "updated_at": 1657339620697,
    "__v": 0
  }


  const mockAnalyticsUserModel = () => ({
    findOne: jest.fn(),
    updateOne: jest.fn(),
    deleteOne: jest.fn(),
    updateMany: jest.fn(),
    save: jest.fn()
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: getModelToken(AnalyticsUser.name),
        // useFactory: mockAnalyticsUserModel ,
        useValue: Model
      }, AnalyticsUserService],
    }).compile();

    model = module.get<Model<AnalyticsUserDocument>>(getModelToken(AnalyticsUser.name));
    service = module.get<AnalyticsUserService>(AnalyticsUserService);
  });

  it('should be defined', () => {
    expect(model).toBeDefined();
    expect(service).toBeDefined();
  });

  it('findOne', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValueOnce(analyticsUser);
    const d = await service.findOne({
      _id: analyticsUser._id
    });
    expect(d).toBe(analyticsUser);
  });

  it('updateOne', async () => {
    jest.spyOn(model, 'updateOne').mockResolvedValueOnce({
      "acknowledged": true,
      "modifiedCount": 1,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 1
    });
    const d = await service.updateOne(analyticsUser._id, analyticsUser);
    expect(d).toEqual({
      "acknowledged": true,
      "modifiedCount": 1,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 1
    });
  });

  it('deleteOne', async () => {
    jest.spyOn(model, 'deleteOne').mockResolvedValueOnce({
      "acknowledged": true,
      "deletedCount": 0
    });
    const d = await service.deleteOne(analyticsUser._id);
    expect(d).toEqual({
      "acknowledged": true,
      "deletedCount": 0
    });
  });

  it('updateMany', async () => {
    jest.spyOn(model, 'updateMany').mockResolvedValueOnce({
      "acknowledged": true,
      "modifiedCount": 1,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 1
    });
    const d = await service.updateMany(analyticsUser._id, analyticsUser);
    expect(d).toEqual({
      "acknowledged": true,
      "modifiedCount": 1,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 1
    });
  });
});
