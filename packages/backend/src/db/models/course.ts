import { DataTypes, Model } from "sequelize";

import { sequelize } from "../database";
import Forum from "./forum";

export default class Course extends Model {
  public id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public course_number!: string;
  public course_title!: string;
  public is_active!: boolean;
  public school_id!: number;
}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    course_number: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    course_title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    modelName: "course",
    underscored: true,
    sequelize: sequelize, // this bit is important
  }
);
Course.hasOne(Forum, { foreignKey: "course_id" });

Course.afterCreate(
  (course: Course): Promise<void> => {
    Forum.create({
      course_id: course.id,
    }).then((forum: Forum) => {
      console.log(`Created forum (${forum.id}) associated with course (${course.id})`);
    });
    return Promise.resolve();
  }
);
