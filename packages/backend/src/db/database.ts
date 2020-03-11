import { Sequelize } from "sequelize-typescript";

import dbConfig from "../db-config.json";
import { User } from "./models/user";
import { School } from "./models/school";
import { Course } from "./models/course";
import { CourseUser } from "./models/course-user";

export const sequelize = new Sequelize(
  dbConfig["database"],
  dbConfig["username"],
  dbConfig["password"],
  {
    host: dbConfig["host"],
    dialect: "mysql",
    models: [School, User, Course, CourseUser],
  }
);
