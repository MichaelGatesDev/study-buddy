import { ICourse } from "@study-buddy/common";

export interface CoursesState {
  fetchingAll: boolean;
  fetchedCourses?: ICourse[];

  error?: string;
}

// ---- FETCH COURSES ---- \\
export const FETCH_COURSES_REQUEST = "PERFORM_FETCH_COURSES";
export const FETCH_COURSES_SUCCESS = "PERFORM_FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "PERFORM_FETCH_COURSES_FAILURE";
interface FetchCoursesRequestAction {
  type: typeof FETCH_COURSES_REQUEST;
}
interface FetchCoursesSuccessAction {
  type: typeof FETCH_COURSES_SUCCESS;
  data: ICourse[];
}
export interface FetchCoursesSuccessPayload {
  type: string;
  data: ICourse[];
}
interface FetchCoursesFailureAction {
  type: typeof FETCH_COURSES_FAILURE;
  error: string;
}
export interface FetchCoursesFailurePayload {
  type: string;
  error: string;
}

export type CourseActionTypes =
  // ---- FETCH COURSES ---- \\
  | FetchCoursesRequestAction
  | FetchCoursesSuccessAction
  | FetchCoursesFailureAction;
