import {
  SchoolState,
  FETCH_SCHOOL_REQUEST,
  FETCH_SCHOOL_SUCCESS,
  FETCH_SCHOOL_FAILURE,
  SchoolActionTypes,
  FETCH_SCHOOLS_REQUEST,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_FAILURE,
} from "./types";

const initialState: SchoolState = {
  fetchingSingle: false,
  fetchingAll: false,
  fetchedSchool: undefined,
  fetchedSchools: undefined,
  error: undefined,
};

export function schoolsReducer(
  state = initialState,
  action: SchoolActionTypes
): SchoolState {
  switch (action.type) {
    default:
      return state;
    // ---- FETCH SCHOOL ----
    case FETCH_SCHOOL_REQUEST:
      return {
        ...state,
        fetchingSingle: true,
      };
    case FETCH_SCHOOL_SUCCESS:
      return {
        ...state,
        fetchingSingle: false,
        fetchedSchool: action.data,
      };
    case FETCH_SCHOOL_FAILURE:
      return {
        ...state,
        fetchingSingle: false,
        error: action.error,
      };
    // ---- FETCH ALL SCHOOLS ----
    case FETCH_SCHOOLS_REQUEST:
      return {
        ...state,
        fetchingAll: true,
      };
    case FETCH_SCHOOLS_SUCCESS:
      return {
        ...state,
        fetchingAll: false,
        fetchedSchools: action.data,
      };
    case FETCH_SCHOOLS_FAILURE:
      return {
        ...state,
        fetchingAll: false,
        error: action.error,
      };
  }
}
