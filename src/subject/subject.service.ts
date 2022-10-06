import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSubjectInput, UpdateSubjectInput } from 'src/types/graphql';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}
  create({ title }: CreateSubjectInput) {
    return this.prisma.subject.create({
      data: { title },
      include: { lecturers: true },
    });
  }

  findAll() {
    return this.prisma.subject.findMany({
      include: { lecturers: true },
    });
  }

  findOne(id: number) {
    return this.prisma.subject.findUnique({
      where: {
        id,
      },
      include: { lecturers: true },
    });
  }

  update(id: number, { title }: UpdateSubjectInput) {
    return this.prisma.subject.update({
      where: {
        id,
      },
      data: {
        title,
      },
      include: { lecturers: true },
    });
  }

  remove(id: number) {
    return this.prisma.subject.delete({ where: { id } });
  }
}
