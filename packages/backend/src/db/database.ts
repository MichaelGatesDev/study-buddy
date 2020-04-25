import { Sequelize } from "sequelize-typescript";
import fs from "fs";

import { User } from "./models/user";
import { School } from "./models/school";
import { Course } from "./models/course";
import { CourseUser } from "./models/course-user";

interface DatabaseConfig {
  host: string;
  database: string;
  username: string;
  password: string;
}

if (!fs.existsSync("./db-config.json")) {
  fs.writeFileSync(
    "./db-config.json",
    JSON.stringify(
      {
        host: "localhost",
        database: "edyou",
        username: "root",
        password: "",
      },
      null,
      4
    )
  );
}

const dbConfig = JSON.parse(fs.readFileSync("./db-config.json", "UTF-8")) as DatabaseConfig;
export const sequelize = new Sequelize(dbConfig["database"], dbConfig["username"], dbConfig["password"], {
  host: dbConfig["host"],
  dialect: "mysql",
  models: [School, User, Course, CourseUser],
});
