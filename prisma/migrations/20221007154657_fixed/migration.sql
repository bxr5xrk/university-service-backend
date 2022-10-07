/*
  Warnings:

  - You are about to drop the column `groupId` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `lecturerId` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `Template` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_lecturerId_fkey";

-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_subjectId_fkey";

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "groupId",
DROP COLUMN "lecturerId",
DROP COLUMN "subjectId",
ADD COLUMN     "group" TEXT NOT NULL DEFAULT 'КІ-31',
ADD COLUMN     "lecturer" TEXT NOT NULL DEFAULT 'Голота Віктор',
ADD COLUMN     "subject" TEXT NOT NULL DEFAULT 'Системне програмування';
