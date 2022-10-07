import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTemplateInput, UpdateTemplateInput } from 'src/types/graphql';
import { TemplateService } from './template.service';

@Resolver('Template')
export class TemplateResolver {
  constructor(private readonly templateService: TemplateService) {}

  @Mutation('createTemplate')
  create(
    @Args('createTemplateInput') createTemplateInput: CreateTemplateInput,
  ) {
    return this.templateService.create(createTemplateInput);
  }

  @Query('templates')
  findAll() {
    return this.templateService.findAll();
  }

  @Query('template')
  findOne(@Args('id') id: number) {
    return this.templateService.findOne(id);
  }

  @Mutation('updateTemplate')
  update(
    @Args('updateTemplateInput') updateTemplateInput: UpdateTemplateInput,
  ) {
    return this.templateService.update(
      updateTemplateInput.id,
      updateTemplateInput,
    );
  }

  @Mutation('removeTemplate')
  remove(@Args('id') id: number) {
    return this.templateService.remove(id);
  }
}
