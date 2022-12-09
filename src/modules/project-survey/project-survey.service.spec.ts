import { Test, TestingModule } from '@nestjs/testing';
import { ProjectSurveyService } from './project-survey.service';

describe('ProjectSurveyService', () => {
  let service: ProjectSurveyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectSurveyService],
    }).compile();

    service = module.get<ProjectSurveyService>(ProjectSurveyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
