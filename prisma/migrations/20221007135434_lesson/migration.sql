-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "lessonScheduleId" INTEGER NOT NULL,
    "templateId" INTEGER NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_lessonScheduleId_fkey" FOREIGN KEY ("lessonScheduleId") REFERENCES "LessonSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
