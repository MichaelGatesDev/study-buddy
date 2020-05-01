import { Table, ForeignKey, Column, Model, PrimaryKey, BelongsTo } from "sequelize-typescript";
import User from "./user";
import Course from "./course";

@Table
export default class CourseUser extends Model<CourseUser> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  user_id!: number;
  @BelongsTo(() => User, "user_id")
  user!: User;

  @ForeignKey(() => Course)
  @PrimaryKey
  @Column
  course_id!: number;
  @BelongsTo(() => Course, "course_id")
  course!: Course;
}
