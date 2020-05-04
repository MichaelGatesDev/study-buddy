import { School } from "./school";
import { Course } from "./course";

export interface User {
  // mandatory
  id: number;
  created_at: Date;
  updated_at: Date;
  //
  email: string;
  google_id: string;
  school_id: number;
  school?: School | null;
}
