
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateGroupInput {
    title: string;
}

export class UpdateGroupInput {
    id: number;
    title?: Nullable<string>;
    lecturerId?: Nullable<number>;
}

export class CreateLecturerInput {
    fullName: string;
}

export class UpdateLecturerInput {
    id: number;
    fullName?: Nullable<string>;
    subjectId?: Nullable<number>;
}

export class CreateStudentInput {
    fullName: string;
    groupId: number;
}

export class UpdateStudentInput {
    id: number;
    groupId: number;
    fullName: string;
}

export class CreateSubjectInput {
    title: string;
}

export class UpdateSubjectInput {
    id: number;
    title: string;
}

export class Group {
    id: number;
    title: string;
    students?: Nullable<Student[]>;
    lecturers: Lecturer[];
}

export abstract class IQuery {
    abstract groups(): Nullable<Group>[] | Promise<Nullable<Group>[]>;

    abstract group(id: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract lecturers(): Nullable<Lecturer>[] | Promise<Nullable<Lecturer>[]>;

    abstract lecturer(id: number): Nullable<Lecturer> | Promise<Nullable<Lecturer>>;

    abstract students(): Nullable<Student>[] | Promise<Nullable<Student>[]>;

    abstract student(id: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract subjects(): Nullable<Subject>[] | Promise<Nullable<Subject>[]>;

    abstract subject(id: number): Nullable<Subject> | Promise<Nullable<Subject>>;
}

export abstract class IMutation {
    abstract createGroup(createGroupInput: CreateGroupInput): Group | Promise<Group>;

    abstract updateGroup(updateGroupInput: UpdateGroupInput): Group | Promise<Group>;

    abstract removeGroup(id: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract createLecturer(createLecturerInput: CreateLecturerInput): Lecturer | Promise<Lecturer>;

    abstract updateLecturer(updateLecturerInput: UpdateLecturerInput): Lecturer | Promise<Lecturer>;

    abstract removeLecturer(id: number): Nullable<Lecturer> | Promise<Nullable<Lecturer>>;

    abstract createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;

    abstract updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;

    abstract removeStudent(id: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract createSubject(createSubjectInput: CreateSubjectInput): Subject | Promise<Subject>;

    abstract updateSubject(updateSubjectInput: UpdateSubjectInput): Subject | Promise<Subject>;

    abstract removeSubject(id: number): Nullable<Subject> | Promise<Nullable<Subject>>;
}

export class Lecturer {
    id: number;
    fullName: string;
    groups: Group[];
    subjects: Subject[];
}

export class Student {
    id: number;
    fullName: string;
    groupId: number;
    group: Group;
}

export class Subject {
    id: number;
    title: string;
    lecturers: Lecturer[];
}

type Nullable<T> = T | null;
