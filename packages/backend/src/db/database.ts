import dbConfig from "../../db-config.json";
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(dbConfig['database'], dbConfig['username'], dbConfig['password'], {
    host: dbConfig['host'],
    dialect: 'mysql',
});