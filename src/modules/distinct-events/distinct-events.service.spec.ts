import { Test, TestingModule } from '@nestjs/testing';
import { DistinctEventsService } from './distinct-events.service';

describe('DistinctEventsService', () => {
  let service: DistinctEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistinctEventsService],
    }).compile();

    service = module.get<DistinctEventsService>(DistinctEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
