import { ISchool } from "./school";
import { ICourse } from "./course";

export interface IUser {
  id?: number;
  created_at?: Date;
  updated_at?: Date;

  email?: string;
  google_id?: string;

  school_id?: number | null;
  school?: ISchool | null;

  courses?: ICourse[] | null;
}
