import { Table, ForeignKey, Column, Model, PrimaryKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user";
import { Course } from "./course";

@Table
export class CourseUser extends Model<CourseUser> {
    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    user_id!: number;

    @BelongsTo(() => User)
    role!: User;

    @ForeignKey(() => Course)
    @PrimaryKey
    @Column
    course_id!: number;

    @BelongsTo(() => Course)
    course!: Course;
}