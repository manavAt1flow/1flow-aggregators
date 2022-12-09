import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Key, KeyDocument } from 'src/common/entity/key.entity';
import { KeyService } from './key.service';

describe('KeyService', () => {
  let service: KeyService;
  let model: Model<Key>;

  const key = {
    "_id": "62c8fee4dac6ee05e0d6bf20",
    "project_id": "62c5b2538ab2d3000ed75b44",
    "timestamp": 1657339620695,
    "deleted_at": null,
    "deleted": false,
    "created_at": 1657339620697,
    "updated_at": 1657339620697,
    "__v": 0
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: getModelToken(Key.name),
        useValue: Model
      },
      KeyService],
    }).compile();
    model = module.get<Model<KeyDocument>>(getModelToken(Key.name));
    service = module.get<KeyService>(KeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValueOnce(key);
    const d = await service.findOne(key._id);
    expect(d).toEqual(key);
  });
});
