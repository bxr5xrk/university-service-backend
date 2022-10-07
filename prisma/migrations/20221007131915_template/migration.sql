-- CreateTable
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "lecturerId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "groupType" TEXT NOT NULL,
    "lessonType" TEXT NOT NULL,
    "link" TEXT,
    "cabinet" TEXT,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_lecturerId_fkey" FOREIGN KEY ("lecturerId") REFERENCES "Lecturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
