import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateStudentInput, UpdateStudentInput } from 'src/types/graphql';
import { StudentService } from './student.service';

@Resolver('Student')
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation('createStudent')
  create(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.studentService.create(createStudentInput);
  }

  @Query('students')
  findAll() {
    return this.studentService.findAll();
  }

  @Query('student')
  findOne(@Args('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Mutation('updateStudent')
  update(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
    return this.studentService.update(
      updateStudentInput.id,
      updateStudentInput,
    );
  }

  @Mutation('removeStudent')
  remove(@Args('id') id: number) {
    return this.studentService.remove(id);
  }
}
