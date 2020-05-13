import { DataTypes, Model, HasManyGetAssociationsMixin } from "sequelize";


import { sequelize } from "../database";

export default class Post extends Model{
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public post_title!: string;
  public forum_id!: number;
  public user_id!: number;

  public getReply!: HasManyGetAssociationsMixin<Reply>
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    post_title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },

  },
    {
      modelName: "post",
      underscored: true,
      sequelize: sequelize, // this bit is important
    }
);


import Forum from './forum';
import User from './user';
import Reply from './reply';
Post.belongsTo(Forum, {foreignKey: "forum_id"});
Post.belongsTo(User,{foreignKey: "user_id"});
Post.hasMany(Reply, {foreignKey: "post_id"});
