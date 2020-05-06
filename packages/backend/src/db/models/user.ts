import { Model, DataTypes } from "sequelize";

import { sequelize } from "../database";

export default class User extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public email!: string;
  public google_id!: string;
  public school_id!: number;
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: new DataTypes.STRING(),
      unique: true,
      allowNull: false,
    },
    google_id: {
      type: new DataTypes.STRING(),
      unique: true,
      allowNull: false,
    },
  },
  {
    modelName: "user",
    underscored: true,
    sequelize: sequelize, // this bit is important
  }
);
import School from "./school";
import Course from "./course";
import { IUser } from "@study-buddy/common";
User.belongsTo(School, { foreignKey: "school_id" });
User.belongsToMany(Course, { through: "UserCourse" });

export const normalize = (user: User) => {
  let resultUser = user as IUser;

  resultUser.school = (user as any).School;
  delete (user as any).School;

  resultUser.courses = (user as any).Courses;
  delete (user as any).Courses;

  return resultUser;
};
