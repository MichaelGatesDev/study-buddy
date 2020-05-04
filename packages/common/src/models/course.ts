import { ISchool } from "./school";
import { IUser } from "./user";

export interface ICourse {
  id?: number;
  created_at?: Date;
  updated_at?: Date;

  course_number?: string;
  course_title?: string;
  is_active?: boolean;

  school_id?: number | null;
  school?: ISchool | null;

  users?: IUser[] | null;
}
