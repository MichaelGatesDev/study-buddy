import { DataTypes, Model, HasManyGetAssociationsMixin } from "sequelize";

import { sequelize } from "../database";

export default class Forum extends Model{
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public forum!: string;
  public course_id!: number;

  public getPosts!: HasManyGetAssociationsMixin<Post>;
  
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

import Course from "./course";
import Post from './post';
Forum.belongsTo(Course, {foreignKey: "course_id"});
Forum.hasMany(Post, {foreignKey:"forum_id"});