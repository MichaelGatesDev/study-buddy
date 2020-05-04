import { DataTypes, Model, HasManyGetAssociationsMixin } from "sequelize";

import { sequelize } from "../database";

export default class School extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public ipeds!: string | null;
  public display_name!: string;
  public is_verified!: boolean;
  public website!: string | null;

  public getEnrolledUsers!: HasManyGetAssociationsMixin<User>;
  public getCourses!: HasManyGetAssociationsMixin<Course>;
}
School.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    ipeds: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    display_name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    is_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    website: {
      type: new DataTypes.STRING(256),
      allowNull: true,
    },
  },
  {
    tableName: "schools",
    underscored: true,
    sequelize: sequelize, // this bit is important
  }
);

import User from "./user";
import Course from "./course";
School.hasMany(User, { foreignKey: "school_id" });
School.hasMany(Course, { foreignKey: "school_id" });
