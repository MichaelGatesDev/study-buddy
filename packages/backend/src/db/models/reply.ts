import { DataTypes, Model } from "sequelize";

import { sequelize } from "../database";

export default class Reply extends Model{
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public post_id!: number;
  public user_id!: number;
}

Reply.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
   
  },
    {
      modelName: "reply",
      underscored: true,
      sequelize: sequelize, // this bit is important
    }
);

import User from "./user";
import Post from './forum';
Post.belongsTo(Post, {foreignKey: "post_id"});
Post.belongsTo(User, {foreignKey: "user_id"});