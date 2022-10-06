import { Test, TestingModule } from '@nestjs/testing';
import { LecturerResolver } from './lecturer.resolver';
import { LecturerService } from './lecturer.service';

describe('LecturerResolver', () => {
  let resolver: LecturerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecturerResolver, LecturerService],
    }).compile();

    resolver = module.get<LecturerResolver>(LecturerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
