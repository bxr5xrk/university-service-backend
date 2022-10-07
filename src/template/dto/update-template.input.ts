import { CreateTemplateInput } from './create-template.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTemplateInput extends PartialType(CreateTemplateInput) {
  id: number;
}
