import { School } from "./school";
import { User } from "./user";

export interface Course {
  // mandatory
  id: number;
  created_at: Date;
  updated_at: Date;
  //
  school_id: number;
  school?: School | null;
  course_number: string;
  course_title: string;
  course_is_active: boolean;
  enrolled_users?: User[] | null;
}
