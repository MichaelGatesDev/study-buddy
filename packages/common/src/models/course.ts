import { School } from "./school";
import { User } from "./user";

export interface Course {
  // mandatory
  id: number;
  created_at: Date;
  updated_at: Date;
  //
  school_id: number;
  course_number: string;
  course_title: string;
}
