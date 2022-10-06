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
        order: Number(parseValue(oneData, order)),
        time: String(parseValue(twoData, time)),
      },
    });
  }

  findAll() {
    return this.prisma.lessonSchedule.findMany();
  }

  findOne(id: number) {
    return this.prisma.lessonSchedule.findUnique({
      where: { id },
    });
  }

  update(id: number, { order, time }: UpdateLessonScheduleInput) {
    return this.prisma.lessonSchedule.update({
      where: { id },
      data: {
        order: Number(parseValue(oneData, order)),
        time: String(parseValue(twoData, time)),
      },
    });
  }

  remove(id: number) {
    return this.prisma.lessonSchedule.delete({ where: { id } });
  }
}

const parseValue = (
  arr: { key: string; value: number | string }[],
  value: string | number,
) => {
  return arr.find((i) => i.key === value).value;
};

const oneData = [
  { key: 'ONE', value: 1 },
  { key: 'TWO', value: 2 },
  { key: 'THREE', value: 3 },
  { key: 'FOUR', value: 4 },
  { key: 'FIVE', value: 5 },
  { key: 'SIX', value: 6 },
];

const twoData = [
  { key: 'ONE', value: '08:30-09:50' },
  { key: 'TWO', value: '10:05-11:25' },
  { key: 'THREE', value: '11:40-13:00' },
  { key: 'FOUR', value: '13:15-14:35' },
  { key: 'FIVE', value: '14:50-16:10' },
  { key: 'SIX', value: '16:25-17:45' },
];
