import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { AccountUser, AccountUserDocument } from 'src/common/entity/account-user.entity';
import { AccountUserService } from './account-user.service';

describe('AccountUserService', () => {
  let service: AccountUserService;
  let model: Model<AccountUser>;
  const accountUser = {
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
        provide: getModelToken(AccountUser.name),
        useValue: Model
      },
      AccountUserService],
    }).compile();
    model = module.get<Model<AccountUserDocument>>(getModelToken(AccountUser.name));
    service = module.get<AccountUserService>(AccountUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll', async () => {
    jest.spyOn(model, 'find').mockResolvedValueOnce([accountUser]);
    const d = await service.findAll();
    expect(d).toEqual([accountUser]);
  });

  it('create', async () => {
    // const id = 
    // jest.spyOn(model, 'save').mockResolvedValueOnce(accountUser);
    // const d = await service.create(accountUser);
    // expect(d).toBe(accountUser);
  });
});
