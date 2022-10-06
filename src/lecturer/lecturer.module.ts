import { Module } from '@nestjs/common';
import { LecturerService } from './lecturer.service';
import { LecturerResolver } from './lecturer.resolver';

@Module({
  providers: [LecturerResolver, LecturerService]
})
export class LecturerModule {}
