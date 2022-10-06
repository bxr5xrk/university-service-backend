-- CreateEnum
CREATE TYPE "OrderLessons" AS ENUM ('1', '2', '3', '4', '5', '6');

-- CreateEnum
CREATE TYPE "orderTime" AS ENUM ('08:30-09:50', '10:05-11:25', '11:40-13:00', '13:15-14:35', '14:50-16:10', '16:25-17:45');

-- CreateTable
CREATE TABLE "Lesson_shedule" (
    "id" SERIAL NOT NULL,
    "order" "OrderLessons" NOT NULL DEFAULT '1',
    "time" "orderTime" NOT NULL DEFAULT '08:30-09:50',

    CONSTRAINT "Lesson_shedule_pkey" PRIMARY KEY ("id")
);
