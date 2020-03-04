import dbConfig from "../../db-config.json";
import { Sequelize } from 'sequelize-typescript';
import { User } from "./models/user";
import { School } from "./models/school";

export const sequelize = new Sequelize(dbConfig['database'], dbConfig['username'], dbConfig['password'], {
    host: dbConfig['host'],
    dialect: 'mysql',
    models: [
        School,
        User
    ],
});
