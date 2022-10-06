/*
  Warnings:

  - The `order` column on the `LessonSchedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `LessonSchedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "LessonSchedule" DROP COLUMN "order",
ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL DEFAULT 1;

-- DropEnum
DROP TYPE "OrderLessons";

-- DropEnum
DROP TYPE "orderTime";
