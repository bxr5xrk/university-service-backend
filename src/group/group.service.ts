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

  update(id: number, { title, lecturersId }: UpdateGroupInput) {
    const lecturersArr = [];
    lecturersId.map((i) => lecturersArr.push({ id: i }));

    return this.prisma.group.update({
      where: { id },
      data: { title, lecturers: { connect: lecturersArr } },
      include: { students: true, lecturers: true },
    });
  }

  remove(id: number) {
    return this.prisma.group.delete({
      where: { id },
      include: { students: true, lecturers: true },
    });
  }
}
