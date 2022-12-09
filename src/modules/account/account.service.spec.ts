import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Account, AccountDocument } from 'src/common/entity/account.entity';
import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;
  let model : Model<AccountDocument>;

  const account = {
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
        provide: getModelToken(Account.name),
        useValue: Model
      }, AccountService],
    }).compile();
    model = module.get<Model<AccountDocument>>(getModelToken(Account.name));
    service = module.get<AccountService>(AccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll', async () => {
    jest.spyOn(model, 'find').mockResolvedValueOnce([account]);
    const d = await service.findAll();
    expect(d).toEqual([account]);
  });
});
