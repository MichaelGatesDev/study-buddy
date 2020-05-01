import { Table, Column, CreatedAt, UpdatedAt, HasMany, Model, PrimaryKey, AutoIncrement, Unique } from "sequelize-typescript";

import User from "./user";
import Course from "./course";

@Table
export default class School extends Model<School> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @Unique
  @Column
  public ipeds!: string;

  @Column
  public display_name!: string;

  @Column
  public is_verified!: boolean;

  @Column
  public website!: string;

  @HasMany(() => User)
  enrolled_users!: User[];

  @HasMany(() => Course)
  active_courses!: Course[];

  @HasMany(() => Course)
  inactive_Courses!: Course[];

  @CreatedAt
  public readonly created_at!: Date;
  @UpdatedAt
  public readonly updated_at!: Date;
}

export const add_school = async (ipeds: string, name: string, website: string): Promise<boolean> => {
  const match = await School.findOne({ where: { ipeds, name, website } });
  if (match) return false;
  return School.upsert({
    ipeds,
    name,
    website,
  });
};
