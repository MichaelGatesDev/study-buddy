import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, BelongsTo, AutoIncrement, BelongsToMany, HasMany } from 'sequelize-typescript';

import { School } from "./school";
import { Course } from "./course";

@Table
export class User extends Model<User> {
    @AutoIncrement
    @PrimaryKey
    @Column
    public id!: number;

    @Column
    public email!: string;
    @Column
    public passwordHash!: string;
    @Column
    public passwordSalt!: string;
    @Column
    public preferredName!: string;
    @Column
    public displayName!: string;

    @ForeignKey(() => School)
    @Column
    schoolId!: number;

    @BelongsTo(() => School)
    school!: School;

    @BelongsToMany(() => Course)
    coursesTaking!: Course[];

    @HasMany(() => Course)
    coursesTaken!: Course[];

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}