import { DataTypes, Model, HasManyGetAssociationsMixin, HasOneGetAssociationMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin } from "sequelize";

import { sequelize } from "../database";
import ForumThread from "./forum-thread";
import Course from "./course";

export default class Forum extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public course_id!: number;
  public getCourse!: HasOneGetAssociationMixin<Course>;

  public getThreads!: HasManyGetAssociationsMixin<ForumThread>;
  public addThread!: HasManyAddAssociationMixin<Course, number>;
  public hasThread!: HasManyHasAssociationMixin<Course, number>;
}

Forum.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    modelName: "forum",
    underscored: true,
    sequelize: sequelize, // this bit is important
  }
);

Forum.hasMany(ForumThread, { foreignKey: "forum_id" });
