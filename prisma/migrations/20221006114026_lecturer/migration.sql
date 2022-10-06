/*
  Warnings:

  - A unique constraint covering the columns `[fullName]` on the table `Lecturer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_fullName_key" ON "Lecturer"("fullName");
