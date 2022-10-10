/*
  Warnings:

  - You are about to drop the column `lessonScheduleId` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the `LessonSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_lessonScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_templateId_fkey";

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "lessonScheduleId",
DROP COLUMN "templateId",
ADD COLUMN     "cabinet" TEXT,
ADD COLUMN     "group" TEXT NOT NULL DEFAULT 'КІ-31',
ADD COLUMN     "groupType" TEXT NOT NULL DEFAULT 'All',
ADD COLUMN     "lecturer" TEXT NOT NULL DEFAULT 'Голота Віктор',
ADD COLUMN     "lessonType" TEXT NOT NULL DEFAULT 'Lecture',
ADD COLUMN     "link" TEXT,
ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "subject" TEXT NOT NULL DEFAULT 'Системне програмування',
ADD COLUMN     "time" TEXT NOT NULL DEFAULT '08:30-09:50';

-- DropTable
DROP TABLE "LessonSchedule";

-- DropTable
DROP TABLE "Template";
