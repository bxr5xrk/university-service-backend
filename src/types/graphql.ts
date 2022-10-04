
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
    title: string;
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

export class Group {
    id: number;
    title: string;
    students: Student[];
}

export abstract class IQuery {
    abstract groups(): Nullable<Group>[] | Promise<Nullable<Group>[]>;

    abstract group(id: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract students(): Nullable<Student>[] | Promise<Nullable<Student>[]>;

    abstract student(id: number): Nullable<Student> | Promise<Nullable<Student>>;
}

export abstract class IMutation {
    abstract createGroup(createGroupInput: CreateGroupInput): Group | Promise<Group>;

    abstract updateGroup(updateGroupInput: UpdateGroupInput): Group | Promise<Group>;

    abstract removeGroup(id: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;

    abstract updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;

    abstract removeStudent(id: number): Nullable<Student> | Promise<Nullable<Student>>;
}

export class Student {
    id: number;
    fullName: string;
    groupId: number;
}

type Nullable<T> = T | null;
