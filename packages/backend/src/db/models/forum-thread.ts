import { DataTypes, Model, HasManyGetAssociationsMixin, HasOneGetAssociationMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin } from "sequelize";

import { sequelize } from "../database";
import User from "./user";
import ForumThreadReply from "./forum-thread-reply";
import Forum from "./forum";

export default class ForumThread extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public forum_id!: number;
  public getForum!: HasOneGetAssociationMixin<Forum>;

  public author_id!: number;
  public title!: string;

  public getReplies!: HasManyGetAssociationsMixin<ForumThreadReply>;
  public addReply!: HasManyAddAssociationMixin<ForumThreadReply, number>;
  public hasReply!: HasManyHasAssociationMixin<ForumThreadReply, number>;
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
