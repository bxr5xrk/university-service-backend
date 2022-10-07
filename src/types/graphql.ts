
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum groupType {
    All = "All",
    First = "First",
    Second = "Second"
}

export enum lessonType {
    Lecture = "Lecture",
    Seminar = "Seminar",
    Exam = "Exam"
}

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

export class CreateLessonScheduleInput {
    order: number;
    time: string;
}

export class UpdateLessonScheduleInput {
    id: number;
    order?: Nullable<number>;
    time?: Nullable<string>;
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

export class CreateTemplateInput {
    groupId: number;
    lecturerId: number;
    subjectId: number;
    groupType: groupType;
    lessonType: lessonType;
    link?: Nullable<string>;
    cabinet?: Nullable<string>;
}

export class UpdateTemplateInput {
    id: number;
    groupId?: Nullable<number>;
    lecturerId?: Nullable<number>;
    subjectId?: Nullable<number>;
    groupType?: Nullable<groupType>;
    lessonType?: Nullable<lessonType>;
    link?: Nullable<string>;
    cabinet?: Nullable<string>;
}

export class Group {
    id: number;
    title: string;
    students: Student[];
    lecturers: Lecturer[];
}

export abstract class IQuery {
    abstract groups(): Nullable<Group>[] | Promise<Nullable<Group>[]>;

    abstract group(id: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract lecturers(): Nullable<Lecturer>[] | Promise<Nullable<Lecturer>[]>;

    abstract lecturer(id: number): Nullable<Lecturer> | Promise<Nullable<Lecturer>>;

    abstract lessonSchedules(): Nullable<LessonSchedule>[] | Promise<Nullable<LessonSchedule>[]>;

    abstract lessonSchedule(id: number): Nullable<LessonSchedule> | Promise<Nullable<LessonSchedule>>;

    abstract students(): Nullable<Student>[] | Promise<Nullable<Student>[]>;

    abstract student(id: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract subjects(): Nullable<Subject>[] | Promise<Nullable<Subject>[]>;

    abstract subject(id: number): Nullable<Subject> | Promise<Nullable<Subject>>;

    abstract templates(): Nullable<Template>[] | Promise<Nullable<Template>[]>;

    abstract template(id: number): Nullable<Template> | Promise<Nullable<Template>>;
}

export abstract class IMutation {
    abstract createGroup(createGroupInput: CreateGroupInput): Group | Promise<Group>;

    abstract updateGroup(updateGroupInput: UpdateGroupInput): Group | Promise<Group>;

    abstract removeGroup(id: number): Nullable<Group> | Promise<Nullable<Group>>;

    abstract createLecturer(createLecturerInput: CreateLecturerInput): Lecturer | Promise<Lecturer>;

    abstract updateLecturer(updateLecturerInput: UpdateLecturerInput): Lecturer | Promise<Lecturer>;

    abstract removeLecturer(id: number): Nullable<Lecturer> | Promise<Nullable<Lecturer>>;

    abstract createLessonSchedule(createLessonScheduleInput: CreateLessonScheduleInput): LessonSchedule | Promise<LessonSchedule>;

    abstract updateLessonSchedule(updateLessonScheduleInput: UpdateLessonScheduleInput): LessonSchedule | Promise<LessonSchedule>;

    abstract removeLessonSchedule(id: number): Nullable<LessonSchedule> | Promise<Nullable<LessonSchedule>>;

    abstract createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;

    abstract updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;

    abstract removeStudent(id: number): Nullable<Student> | Promise<Nullable<Student>>;

    abstract createSubject(createSubjectInput: CreateSubjectInput): Subject | Promise<Subject>;

    abstract updateSubject(updateSubjectInput: UpdateSubjectInput): Subject | Promise<Subject>;

    abstract removeSubject(id: number): Nullable<Subject> | Promise<Nullable<Subject>>;

    abstract createTemplate(createTemplateInput: CreateTemplateInput): Template | Promise<Template>;

    abstract updateTemplate(updateTemplateInput: UpdateTemplateInput): Template | Promise<Template>;

    abstract removeTemplate(id: number): Nullable<Template> | Promise<Nullable<Template>>;
}

export class Lecturer {
    id: number;
    fullName: string;
    groups: Group[];
    subjects: Subject[];
}

export class LessonSchedule {
    id: number;
    order: number;
    time: string;
}

export class Student {
    id: number;
    fullName: string;
    groupId: number;
}

export class Subject {
    id: number;
    title: string;
    lecturers: Lecturer[];
}

export class Template {
    id: number;
    groupId: number;
    lecturerId: number;
    subjectId: number;
    groupType: groupType;
    lessonType: lessonType;
    lecturer: Lecturer;
    group: Group;
    subject: Subject;
    link?: Nullable<string>;
    cabinet?: Nullable<string>;
}

type Nullable<T> = T | null;
