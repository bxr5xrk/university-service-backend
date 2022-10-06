-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LecturerToSubject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LecturerToSubject_AB_unique" ON "_LecturerToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_LecturerToSubject_B_index" ON "_LecturerToSubject"("B");

-- AddForeignKey
ALTER TABLE "_LecturerToSubject" ADD CONSTRAINT "_LecturerToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LecturerToSubject" ADD CONSTRAINT "_LecturerToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
