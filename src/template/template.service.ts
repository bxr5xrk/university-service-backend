import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTemplateInput, UpdateTemplateInput } from 'src/types/graphql';

@Injectable()
export class TemplateService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateTemplateInput) {
    return this.prisma.template.create({
      data,
      include: { lessons: true },
    });
  }

  findAll() {
    return this.prisma.template.findMany({
      include: { lessons: true },
    });
  }

  findOne(id: number) {
    return this.prisma.template.findUnique({
      where: { id },
      include: { lessons: true },
    });
  }

  update(
    id: number,
    {
      group,
      lecturer,
      subject,
      groupType,
      lessonType,
      link,
      cabinet,
    }: UpdateTemplateInput,
  ) {
    return this.prisma.template.update({
      where: { id },
      data: {
        group,
        lecturer,
        subject,
        groupType,
        lessonType,
        link,
        cabinet,
      },
      include: { lessons: true },
    });
  }

  remove(id: number) {
    return this.prisma.template.delete({
      where: { id },
    });
  }
}
