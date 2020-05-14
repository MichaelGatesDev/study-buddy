import { Model, DataTypes, BelongsToManyGetAssociationsMixin, BelongsToManyAddAssociationMixin, BelongsToManyHasAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin } from "sequelize";

import { sequelize } from "../database";
import School from "./school";
import Course from "./course";

export default class User extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public email!: string;
  public google_id!: string;
  public school_id!: number;

  public getSchool!: BelongsToGetAssociationMixin<School>;
  public setSchool!: BelongsToSetAssociationMixin<School, number>;

  public getCourses!: BelongsToManyGetAssociationsMixin<Course>;
  public addCourse!: BelongsToManyAddAssociationMixin<Course, number>;
  public hasCourse!: BelongsToManyHasAssociationMixin<Course, number>;
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
