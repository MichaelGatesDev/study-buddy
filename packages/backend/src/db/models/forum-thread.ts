import { DataTypes, Model, HasManyGetAssociationsMixin } from "sequelize";

import { sequelize } from "../database";
import User from "./user";
import ForumThreadReply from "./forum-thread-reply";

export default class ForumThread extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public forum_id!: number;
  public author_id!: number;
  public title!: string;

  public getReplies!: HasManyGetAssociationsMixin<ForumThreadReply>;
}

ForumThread.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    modelName: "forum_thread",
    underscored: true,
    sequelize: sequelize, // this bit is important
  }
);

ForumThread.belongsTo(User, { foreignKey: "author_id" });
ForumThread.hasMany(ForumThreadReply, { foreignKey: "forum_thread_id" });
