import { CreateLessonScheduleInput } from './create-lesson-schedule.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLessonScheduleInput extends PartialType(CreateLessonScheduleInput) {
  id: number;
}
