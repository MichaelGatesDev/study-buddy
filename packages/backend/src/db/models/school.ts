import { Table, Column, ForeignKey, CreatedAt, UpdatedAt, HasMany, Model, PrimaryKey } from "sequelize-typescript";

import { User } from "./user";
import { Course } from './course';

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

    @HasMany(() => Course)
    active_courses!: Course[];

    @HasMany(() => Course)
    inactive_Courses!: Course[];

    @CreatedAt
    public readonly created_at!: Date;
    @UpdatedAt
    public readonly updated_at!: Date;
}