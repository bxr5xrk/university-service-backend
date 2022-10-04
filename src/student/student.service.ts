import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateStudentInput, UpdateStudentInput } from 'src/types/graphql';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  create({ fullName }: CreateStudentInput) {
    return this.prisma.student.create({
      data: {
        fullName,
      },
    });
  }

  findAll() {
    return this.prisma.student.findMany();
  }

  findOne(id: number) {
    return this.prisma.student.findUnique({
      where: { id },
      // select: { fullName: true, id: true },
    });
  }

  update(id: number, { fullName }: UpdateStudentInput) {
    return this.prisma.student.update({ where: { id }, data: { fullName } });
  }

  remove(id: number) {
    return this.prisma.student.delete({ where: { id } });
  }
}
