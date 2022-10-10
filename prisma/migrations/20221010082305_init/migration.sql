/*
  Warnings:

  - You are about to drop the `Lesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GroupToSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LessonToSchedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GroupToSchedule" DROP CONSTRAINT "_GroupToSchedule_A_fkey";

-- DropForeignKey
ALTER TABLE "_GroupToSchedule" DROP CONSTRAINT "_GroupToSchedule_B_fkey";

-- DropForeignKey
ALTER TABLE "_LessonToSchedule" DROP CONSTRAINT "_LessonToSchedule_A_fkey";

-- DropForeignKey
ALTER TABLE "_LessonToSchedule" DROP CONSTRAINT "_LessonToSchedule_B_fkey";

-- DropTable
DROP TABLE "Lesson";

-- DropTable
DROP TABLE "Schedule";

-- DropTable
DROP TABLE "_GroupToSchedule";

-- DropTable
DROP TABLE "_LessonToSchedule";
