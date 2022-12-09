import { Test, TestingModule } from '@nestjs/testing';
import { ProjectSurveyController } from './project-survey.controller';

describe('ProjectSurveyController', () => {
  let controller: ProjectSurveyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectSurveyController],
    }).compile();

    controller = module.get<ProjectSurveyController>(ProjectSurveyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
