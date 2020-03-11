import {
  Table,
  Column,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  HasMany,
  Model,
  PrimaryKey,
  BelongsTo,
} from "sequelize-typescript";

import { School } from "./school";
import { CourseUser } from "./course-user";

@Table
export class Course extends Model<Course> {
  @PrimaryKey
  @Column
  public id!: number;

  @Column
  public course_number!: string;
  @Column
  public course_title!: string;

  @ForeignKey(() => School)
  school_id!: number;
  @BelongsTo(() => School, "school_id")
  school!: School;

  @HasMany(() => CourseUser)
  enrolled_users!: CourseUser[];

  @CreatedAt
  public readonly created_at!: Date;
  @UpdatedAt
  public readonly updated_at!: Date;
}
