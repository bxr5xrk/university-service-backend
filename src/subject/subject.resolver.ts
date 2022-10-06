import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateSubjectInput, UpdateSubjectInput } from 'src/types/graphql';
import { SubjectService } from './subject.service';

@Resolver('Subject')
export class SubjectResolver {
  constructor(private readonly subjectService: SubjectService) {}

  @Mutation('createSubject')
  create(@Args('createSubjectInput') createSubjectInput: CreateSubjectInput) {
    return this.subjectService.create(createSubjectInput);
  }

  @Query('subjects')
  findAll() {
    return this.subjectService.findAll();
  }

  @Query('subject')
  findOne(@Args('id') id: number) {
    return this.subjectService.findOne(id);
  }

  @Mutation('updateSubject')
  update(@Args('updateSubjectInput') updateSubjectInput: UpdateSubjectInput) {
    return this.subjectService.update(
      updateSubjectInput.id,
      updateSubjectInput,
    );
  }

  @Mutation('removeSubject')
  remove(@Args('id') id: number) {
    return this.subjectService.remove(id);
  }
}
