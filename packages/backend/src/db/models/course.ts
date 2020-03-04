import { Table, Column, ForeignKey, CreatedAt, UpdatedAt, HasMany, Model, PrimaryKey, BelongsTo } from "sequelize-typescript";

import { User } from "./user";
import { School } from "./school";

@Table
export class Course extends Model<Course> {
    @PrimaryKey
    @Column
    public id!: number;

    @Column
    public courseNumber!: string;
    @Column
    public courseTitle!: string;

    @ForeignKey(() => School)
    school_id!: number;
    @BelongsTo(() => School)
    school!: School;

    @HasMany(() => User)
    enrolled_users!: User[];

    @CreatedAt
    public readonly createdAt!: Date;
    @UpdatedAt
    public readonly updatedAt!: Date;
}
