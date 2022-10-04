import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateStudentInput, UpdateStudentInput } from 'src/types/graphql';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  create({ fullName, groupId }: CreateStudentInput) {
    return this.prisma.student.create({
      data: {
        fullName,
        groupId,
      },
    });
  }

  findAll() {
    return this.prisma.student.findMany();
  }

  findOne(id: number) {
    return this.prisma.student.findUnique({
      where: { id },
    });
  }

  update(id: number, { fullName, groupId }: UpdateStudentInput) {
    return this.prisma.student.update({
      where: { id },
      data: { fullName, groupId },
    });
  }

  remove(id: number) {
    return this.prisma.student.delete({ where: { id } });
  }
}
