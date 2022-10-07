import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateLessonScheduleInput,
  UpdateLessonScheduleInput,
} from 'src/types/graphql';

@Injectable()
export class LessonScheduleService {
  constructor(private prisma: PrismaService) {}
  create({ order, time }: CreateLessonScheduleInput) {
    return this.prisma.lessonSchedule.create({
      data: {
        order,
        time,
      },
      include: { lessons: true },
    });
  }

  findAll() {
    return this.prisma.lessonSchedule.findMany({ orderBy: { order: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.lessonSchedule.findUnique({
      where: { id },
      include: { lessons: true },
    });
  }

  update(id: number, { order, time }: UpdateLessonScheduleInput) {
    return this.prisma.lessonSchedule.update({
      where: { id },
      data: {
        order,
        time,
      },
      include: { lessons: true },
    });
  }

  remove(id: number) {
    return this.prisma.lessonSchedule.delete({ where: { id } });
  }
}
