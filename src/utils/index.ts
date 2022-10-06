import { Lecturer } from '@prisma/client';

export const addOrRemoveLecturer = (
  lecturers: Lecturer[],
  lecturerId: number,
) => {
  const includes = lecturers.find((i) => i.id === lecturerId);

  return includes
    ? { disconnect: { id: lecturerId } }
    : { connect: { id: lecturerId } };
};
