import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTemplateInput, UpdateTemplateInput } from 'src/types/graphql';

@Injectable()
export class TemplateService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateTemplateInput) {
    return this.prisma.template.create({
      data,
      include: { lecturer: true, subject: true, group: true },
    });
  }

  findAll() {
    return this.prisma.template.findMany({
      include: { lecturer: true, subject: true, group: true },
    });
  }

  findOne(id: number) {
    return this.prisma.template.findUnique({
      where: { id },
      include: { lecturer: true, subject: true, group: true },
    });
  }

  update(id: number, data: UpdateTemplateInput) {
    return this.prisma.template.update({
      where: { id },
      data,
      include: { lecturer: true, subject: true, group: true },
    });
  }

  remove(id: number) {
    return this.prisma.template.delete({
      where: { id },
    });
  }
}
