import { Table, Column, ForeignKey, CreatedAt, UpdatedAt, HasMany, Model, PrimaryKey } from "sequelize-typescript";

import { User } from "./user";

@Table
export class School extends Model<School> {
    @PrimaryKey
    @Column
    public id!: number;

    @Column
    public name!: string;
    @Column
    public website!: string;

    @HasMany(() => User)
    enrolled_users!: User[];

    @CreatedAt
    public readonly createdAt!: Date;
    @UpdatedAt
    public readonly updatedAt!: Date;
}