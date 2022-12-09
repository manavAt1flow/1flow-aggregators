import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { AccountProject, AccountProjectDocument } from 'src/common/entity/account-project.entity';
import { AccountProjectService } from './account-project.service';

describe('AccountProjectService', () => {
  let service: AccountProjectService, model: Model<AccountProject>;

  const accountProject = {
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
        provide: getModelToken(AccountProject.name),
        useValue: Model
      },
      AccountProjectService],
    }).compile();
    model = module.get<Model<AccountProjectDocument>>(getModelToken(AccountProject.name))
    service = module.get<AccountProjectService>(AccountProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findById', async () => {
    const id = 
    jest.spyOn(model, 'findById').mockResolvedValueOnce(accountProject);
    const d = await service.findById(accountProject._id);
    expect(d).toBe(accountProject);
  });
});
