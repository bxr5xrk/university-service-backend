import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CreateLessonScheduleInput,
  UpdateLessonScheduleInput,
} from 'src/types/graphql';
import { LessonScheduleService } from './lesson-schedule.service';

@Resolver('LessonSchedule')
export class LessonScheduleResolver {
  constructor(private readonly lessonScheduleService: LessonScheduleService) {}

  @Mutation('createLessonSchedule')
  create(
    @Args('createLessonScheduleInput')
    createLessonScheduleInput: CreateLessonScheduleInput,
  ) {
    return this.lessonScheduleService.create(createLessonScheduleInput);
  }

  @Query('lessonSchedules')
  findAll() {
    return this.lessonScheduleService.findAll();
  }

  @Query('lessonSchedule')
  findOne(@Args('id') id: number) {
    return this.lessonScheduleService.findOne(id);
  }

  @Mutation('updateLessonSchedule')
  update(
    @Args('updateLessonScheduleInput')
    updateLessonScheduleInput: UpdateLessonScheduleInput,
  ) {
    return this.lessonScheduleService.update(
      updateLessonScheduleInput.id,
      updateLessonScheduleInput,
    );
  }

  @Mutation('removeLessonSchedule')
  remove(@Args('id') id: number) {
    return this.lessonScheduleService.remove(id);
  }
}
