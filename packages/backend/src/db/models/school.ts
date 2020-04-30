import { Table, Column, CreatedAt, UpdatedAt, HasMany, Model, PrimaryKey, AutoIncrement, Unique } from "sequelize-typescript";

import { User } from "./User";
import { Course } from "./Course";

@Table
export class School extends Model<School> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @Unique
  @Column
  public ipeds!: string;

  @Column
  public name!: string;

  @Column
  public verified!: boolean;

  @Unique
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
