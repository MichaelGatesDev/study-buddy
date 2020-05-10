import { ICourse, IUser, ISchool } from "../models";

export interface GenericParams extends IUser, ICourse, ISchool {}
