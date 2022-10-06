import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateLecturerInput, UpdateLecturerInput } from 'src/types/graphql';

@Injectable()
export class LecturerService {
  constructor(private prisma: PrismaService) {}
  create({ fullName }: CreateLecturerInput) {
    return this.prisma.lecturer.create({
      data: { fullName },
      include: { groups: true },
    });
  }

  findAll() {
    return this.prisma.lecturer.findMany({
      include: { groups: true },
    });
  }

  findOne(id: number) {
    return this.prisma.lecturer.findUnique({
      where: { id },
      include: { groups: true },
    });
  }

  update(id: number, { fullName }: UpdateLecturerInput) {
    return this.prisma.lecturer.update({
      where: { id },
      data: { fullName },
      include: { groups: true },
    });
  }

  remove(id: number) {
    return this.prisma.lecturer.delete({
      where: { id },
      include: { groups: true },
    });
  }
}
