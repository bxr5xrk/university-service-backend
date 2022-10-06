import { Module } from '@nestjs/common';
import { LessonScheduleService } from './lesson-schedule.service';
import { LessonScheduleResolver } from './lesson-schedule.resolver';

@Module({
  providers: [LessonScheduleResolver, LessonScheduleService]
})
export class LessonScheduleModule {}
