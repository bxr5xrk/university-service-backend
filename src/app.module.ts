import { PrismaModule } from './prisma/prisma.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { SubjectModule } from './subject/subject.module';
import { LessonScheduleModule } from './lesson-schedule/lesson-schedule.module';
import { TemplateModule } from './template/template.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/types/graphql.ts'),
        outputAs: 'class',
      },
    }),
    PrismaModule,
    StudentModule,
    GroupModule,
    LecturerModule,
    SubjectModule,
    LessonScheduleModule,
    TemplateModule,
    LessonModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
