import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { Token, TokenDocument } from 'src/common/entity/token.entity';
import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;
  let model: Model<TokenDocument>;

  const token = {
    "_id": "62c8fee4dac6ee05e0d6bf20",
    "token": "sdfsdfksdjflasd",
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
        provide: getModelToken(Token.name),
        useValue: Model
      },
      TokenService],
    }).compile();
    model = module.get<Model<TokenDocument>>(getModelToken(Token.name));
    service = module.get<TokenService>(TokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValueOnce(token);
    const d = await service.findOne(token.token);
    expect(d).toEqual(token);
  });
});
