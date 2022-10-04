
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateStudentInput {
    fullName: string;
}

export class UpdateStudentInput {
    id: number;
    fullName: string;
}

export class Student {
    id: number;
    fullName: string;
}

export abstract class IQuery {
    abstract students(): Nullable<Student>[] | Promise<Nullable<Student>[]>;

    abstract student(id: number): Nullable<Student> | Promise<Nullable<Student>>;
}

export abstract class IMutation {
    abstract createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;

    abstract updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;

    abstract removeStudent(id: number): Nullable<Student> | Promise<Nullable<Student>>;
}

type Nullable<T> = T | null;
