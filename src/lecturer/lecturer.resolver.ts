import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLecturerInput, UpdateLecturerInput } from 'src/types/graphql';
import { LecturerService } from './lecturer.service';

@Resolver('Lecturer')
export class LecturerResolver {
  constructor(private readonly lecturerService: LecturerService) {}

  @Mutation('createLecturer')
  create(
    @Args('createLecturerInput') createLecturerInput: CreateLecturerInput,
  ) {
    return this.lecturerService.create(createLecturerInput);
  }

  @Query('lecturers')
  findAll() {
    return this.lecturerService.findAll();
  }

  @Query('lecturer')
  findOne(@Args('id') id: number) {
    return this.lecturerService.findOne(id);
  }

  @Mutation('updateLecturer')
  update(
    @Args('updateLecturerInput') updateLecturerInput: UpdateLecturerInput,
  ) {
    return this.lecturerService.update(
      updateLecturerInput.id,
      updateLecturerInput,
    );
  }

  @Mutation('removeLecturer')
  remove(@Args('id') id: number) {
    return this.lecturerService.remove(id);
  }
}
