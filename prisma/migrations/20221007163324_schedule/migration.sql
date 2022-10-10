-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GroupToSchedule" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LessonToSchedule" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToSchedule_AB_unique" ON "_GroupToSchedule"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToSchedule_B_index" ON "_GroupToSchedule"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LessonToSchedule_AB_unique" ON "_LessonToSchedule"("A", "B");

-- CreateIndex
CREATE INDEX "_LessonToSchedule_B_index" ON "_LessonToSchedule"("B");

-- AddForeignKey
ALTER TABLE "_GroupToSchedule" ADD CONSTRAINT "_GroupToSchedule_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToSchedule" ADD CONSTRAINT "_GroupToSchedule_B_fkey" FOREIGN KEY ("B") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToSchedule" ADD CONSTRAINT "_LessonToSchedule_A_fkey" FOREIGN KEY ("A") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToSchedule" ADD CONSTRAINT "_LessonToSchedule_B_fkey" FOREIGN KEY ("B") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
