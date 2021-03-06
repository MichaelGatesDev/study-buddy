import { DataTypes, Model, HasOneGetAssociationMixin } from "sequelize";

import { sequelize } from "../database";
import ForumThread from "./forum-thread";

export default class ForumThreadReply extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public thread_id!: number;
  public getThread!: HasOneGetAssociationMixin<ForumThread>;

  public author_id!: number;
  public content!: string;
}

ForumThreadReply.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
  },
  {
    modelName: "forum_thread_reply",
    underscored: true,
    sequelize: sequelize, // this bit is important
  }
);
