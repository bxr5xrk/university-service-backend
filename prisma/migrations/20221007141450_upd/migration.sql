/*
  Warnings:

  - A unique constraint covering the columns `[lessonScheduleId]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[templateId]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[groupId]` on the table `Template` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lecturerId]` on the table `Template` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subjectId]` on the table `Template` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lesson_lessonScheduleId_key" ON "Lesson"("lessonScheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_templateId_key" ON "Lesson"("templateId");

-- CreateIndex
CREATE UNIQUE INDEX "Template_groupId_key" ON "Template"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "Template_lecturerId_key" ON "Template"("lecturerId");

-- CreateIndex
CREATE UNIQUE INDEX "Template_subjectId_key" ON "Template"("subjectId");
