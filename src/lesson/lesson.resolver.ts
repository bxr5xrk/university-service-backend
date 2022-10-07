import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLessonInput, UpdateLessonInput } from 'src/types/graphql';
import { LessonService } from './lesson.service';

@Resolver('Lesson')
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Mutation('createLesson')
  create(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
    return this.lessonService.create(createLessonInput);
  }

  @Query('lessons')
  findAll() {
    return this.lessonService.findAll();
  }

  @Query('lesson')
  findOne(@Args('id') id: number) {
    return this.lessonService.findOne(id);
  }

  @Mutation('updateLesson')
  update(@Args('updateLessonInput') updateLessonInput: UpdateLessonInput) {
    return this.lessonService.update(updateLessonInput.id, updateLessonInput);
  }

  @Mutation('removeLesson')
  remove(@Args('id') id: number) {
    return this.lessonService.remove(id);
  }
}
