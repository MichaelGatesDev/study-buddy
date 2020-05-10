import {
  CoursesState,
  CourseActionTypes,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
} from "./types";

const initialState: CoursesState = {
  fetchingAll: false,
  fetchedCourses: undefined,
  error: undefined,
};

export function coursesReducer(
  state = initialState,
  action: CourseActionTypes
): CoursesState {
  switch (action.type) {
    default:
      return state;
    // ---- FETCH ALL COURSES ----
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        fetchingAll: true,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        fetchingAll: false,
        fetchedCourses: action.data,
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        fetchingAll: false,
        error: action.error,
      };
  }
}
