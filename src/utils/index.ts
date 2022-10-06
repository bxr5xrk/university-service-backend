import { Lecturer, Subject } from '@prisma/client';

export const addOrRemoveLecturer = (
  lecturers: Lecturer[],
  lecturerId: number,
) => {
  const includes = lecturers.find((i) => i.id === lecturerId);

  return includes
    ? { disconnect: { id: lecturerId } }
    : { connect: { id: lecturerId } };
};

export const addOrRemoveSubject = (subject: Subject[], subjectId: number) => {
  const includes = subject.find((i) => i.id === subjectId);

  return includes
    ? { disconnect: { id: subjectId } }
    : { connect: { id: subjectId } };
};
