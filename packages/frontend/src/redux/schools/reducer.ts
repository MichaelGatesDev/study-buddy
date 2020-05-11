import {
  SchoolsState,
  SchoolActionTypes,
  FETCH_SCHOOLS_REQUEST,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_FAILURE,
} from "./types";

const initialState: SchoolsState = {
  fetchingAll: false,
  fetchedSchools: undefined,

  error: undefined,
};

export function schoolsReducer(
  state = initialState,
  action: SchoolActionTypes
): SchoolsState {
  switch (action.type) {
    default:
      return state;
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
