import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateLessonInput, UpdateLessonInput } from 'src/types/graphql';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}
  create({ lessonScheduleId, templateId }: CreateLessonInput) {
    return this.prisma.lesson.create({
      data: {
        lessonScheduleId,
        templateId,
      },
      include: { template: true, lessonSchedule: true },
    });
  }

  findAll() {
    return this.prisma.lesson.findMany({
      include: { template: true, lessonSchedule: true },
    });
  }

  findOne(id: number) {
    return this.prisma.lesson.findUnique({
      where: { id },
      include: { template: true, lessonSchedule: true },
    });
  }

  update(id: number, { lessonScheduleId, templateId }: UpdateLessonInput) {
    return this.prisma.lesson.update({
      where: { id },
      data: { lessonScheduleId, templateId },
      include: { template: true, lessonSchedule: true },
    });
  }

  remove(id: number) {
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}
