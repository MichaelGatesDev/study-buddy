import { IUser } from ".";
import { ICourse } from "./course";

export interface ISchool {
  id?: number;
  created_at?: Date;
  updated_at?: Date;

  ipeds?: string | null;
  display_name?: string;
  is_verified?: boolean;
  website?: string | null;

  users?: IUser[] | null;
  courses?: ICourse[] | null;
}
