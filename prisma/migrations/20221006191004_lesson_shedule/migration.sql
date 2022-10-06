/*
  Warnings:

  - You are about to drop the `Lesson_shedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Lesson_shedule";

-- CreateTable
CREATE TABLE "LessonSchedule" (
    "id" SERIAL NOT NULL,
    "order" "OrderLessons" NOT NULL DEFAULT '1',
    "time" "orderTime" NOT NULL DEFAULT '08:30-09:50',

    CONSTRAINT "LessonSchedule_pkey" PRIMARY KEY ("id")
);
