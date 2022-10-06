import { CreateLecturerInput } from './create-lecturer.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLecturerInput extends PartialType(CreateLecturerInput) {
  id: number;
}
