-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "groupId" INTEGER,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lecturer" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,

    CONSTRAINT "Lecturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GroupToLecturer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_title_key" ON "Group"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Student_fullName_key" ON "Student"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToLecturer_AB_unique" ON "_GroupToLecturer"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToLecturer_B_index" ON "_GroupToLecturer"("B");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToLecturer" ADD CONSTRAINT "_GroupToLecturer_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToLecturer" ADD CONSTRAINT "_GroupToLecturer_B_fkey" FOREIGN KEY ("B") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
