import { DataTypes, Model, HasManyGetAssociationsMixin } from "sequelize";

import { sequelize } from "../database";
import ForumThread from "./forum-thread";

export default class Forum extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public course_id!: number;

  public getThreads!: HasManyGetAssociationsMixin<ForumThread>;
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
