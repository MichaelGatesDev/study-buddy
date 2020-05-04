import { Table, Column, ForeignKey, CreatedAt, UpdatedAt, HasMany, Model, PrimaryKey, BelongsTo, AutoIncrement, Default } from "sequelize-typescript";

import School from "./school";
import CourseUser from "./course-user";

@Table
export default class Course extends Model<Course> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @ForeignKey(() => School)
  school_id!: number;
  @BelongsTo(() => School, "school_id")
  school!: School;

  @Column
  public course_number!: string;

  @Column
  public course_title!: string;

  @Default(true)
  @Column
  public course_is_active!: boolean;

  @HasMany(() => CourseUser)
  enrolled_users!: CourseUser[];

  @CreatedAt
  public readonly created_at!: Date;
  @UpdatedAt
  public readonly updated_at!: Date;
}

export const add_course = async (schoolID: number, courseNumber: string, courseTitle: string): Promise<boolean> => {
  const match = await Course.findOne({ where: { school_id: schoolID, course_number: courseNumber } });
  if (match) return false;
  return Course.upsert({
    school_id: schoolID,
    course_number: courseNumber,
    course_title: courseTitle,
  });
};
