import { User } from ".";
import { Course } from "./course";

export interface School {
  // mandatory
  id: number;
  created_at: Date;
  updated_at: Date;
  //
  ipeds: string;
  display_name: string;
  is_verified: boolean;
  website: string;
  enrolled_users?: User[] | null;
  courses?: Course[] | null;
}
