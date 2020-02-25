import { sequelize } from '../database';
import { Model, DataTypes } from 'sequelize';

export class User extends Model {
    public id!: number;
    public schoolID!: number;
    public email!: string;
    public passwordHash!: string;
    public passwordSalt!: string;
    public preferredName!: string;
    public displayName!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    schoolID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    email: {
        type: new DataTypes.STRING(320),
        allowNull: false,
    },
    passwordHash: {
        type: new DataTypes.STRING(),
        allowNull: false,
    },
    passwordSalt: {
        type: new DataTypes.STRING(),
        allowNull: false,
    },
    preferredName: {
        type: new DataTypes.STRING(30),
        allowNull: false,
    },
    displayName: {
        type: new DataTypes.STRING(30),
        allowNull: false,
    },
}, {
    tableName: 'users',
    sequelize: sequelize, // this bit is important
});

User.sync({ force: true });