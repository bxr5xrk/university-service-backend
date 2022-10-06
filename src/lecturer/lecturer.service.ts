import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateLecturerInput, UpdateLecturerInput } from 'src/types/graphql';
import { addOrRemoveSubject } from 'src/utils';

@Injectable()
export class LecturerService {
  constructor(private prisma: PrismaService) {}
  create({ fullName }: CreateLecturerInput) {
    return this.prisma.lecturer.create({
      data: { fullName },
      include: { groups: true, subjects: true },
    });
  }

  findAll() {
    return this.prisma.lecturer.findMany({
      include: { groups: true, subjects: true },
    });
  }

  findOne(id: number) {
    return this.prisma.lecturer.findUnique({
      where: { id },
      include: { groups: true, subjects: true },
    });
  }

  async update(id: number, { fullName, subjectId }: UpdateLecturerInput) {
    const findSubject = await this.prisma.lecturer.findUnique({
      where: { id },
      include: { subjects: true },
    });

    return this.prisma.lecturer.update({
      where: { id },
      data: {
        fullName,
        subjects: addOrRemoveSubject(findSubject.subjects, subjectId),
      },
      include: { groups: true, subjects: true },
    });
  }

  remove(id: number) {
    return this.prisma.lecturer.delete({
      where: { id },
      include: { groups: true, subjects: true },
    });
  }
}
