import { Test, TestingModule } from '@nestjs/testing';
import { LessonScheduleResolver } from './lesson-schedule.resolver';
import { LessonScheduleService } from './lesson-schedule.service';

describe('LessonScheduleResolver', () => {
  let resolver: LessonScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonScheduleResolver, LessonScheduleService],
    }).compile();

    resolver = module.get<LessonScheduleResolver>(LessonScheduleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
