import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGroupInput, UpdateGroupInput } from 'src/types/graphql';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}
  create({ title }: CreateGroupInput) {
    return this.prisma.group.create({
      data: {
        title,
      },
      include: { students: true, lecturers: true },
    });
  }

  findAll() {
    return this.prisma.group.findMany({
      include: { students: true, lecturers: true },
    });
  }

  findOne(id: number) {
    return this.prisma.group.findUnique({
      where: {
        id,
      },
      include: { students: true, lecturers: true },
    });
  }

  async update(id: number, { title, lecturerId }: UpdateGroupInput) {
    const find = await this.prisma.group.findUnique({
      where: { id },
      include: { lecturers: true },
    });
    const includes = find.lecturers.find((i) => i.id === lecturerId);

    if (includes) {
      return this.prisma.group.update({
        where: { id },
        data: { title, lecturers: { disconnect: { id: lecturerId } } },
        include: { students: true, lecturers: true },
      });
    } else {
      return this.prisma.group.update({
        where: { id },
        data: { title, lecturers: { connect: { id: lecturerId } } },
        include: { students: true, lecturers: true },
      });
    }
  }

  remove(id: number) {
    return this.prisma.group.delete({
      where: { id },
      include: { students: true, lecturers: true },
    });
  }
}
