import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, BelongsTo, AutoIncrement, BelongsToMany, Unique } from "sequelize-typescript";

import { School } from "./school";
import { Course } from "./course";
import { CourseUser } from "./course-user";

@Table
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @Unique
  @Column
  public email!: string;

  @Unique
  @Column
  public google_id!: string;

  @ForeignKey(() => School)
  @Column
  school_id!: number;

  @BelongsTo(() => School, "school_id")
  school!: School;

  @BelongsToMany(
    () => Course,
    () => CourseUser
  )
  courses_taking!: Course[];

  @BelongsToMany(
    () => Course,
    () => CourseUser,
    "course_id",
    "user_id"
  )
  courses_taken!: Course[];

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}
