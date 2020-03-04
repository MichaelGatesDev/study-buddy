import { Table, ForeignKey, Column, Model } from "sequelize-typescript";
import { User } from "./user";
import { Course } from "./course";

@Table
export class CourseStudent extends Model<CourseStudent> {

    @ForeignKey(() => User)
    @Column
    userId!: number;

    @ForeignKey(() => Course)
    @Column
    courseId!: number;
}