import {
  UserState,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UserActionTypes,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "./types";

const initialState: UserState = {
  fetchingSingle: false,
  fetchedUser: undefined,

  updatingUser: false,

  fetchingAll: false,
  fetchedUsers: undefined,

  error: undefined,
};

export function usersReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    default:
      return state;
    // ---- FETCH USER ----
    case FETCH_USER_REQUEST:
      return {
        ...state,
        fetchingSingle: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchingSingle: false,
        fetchedUser: action.data,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        fetchingSingle: false,
        error: action.error,
      };
    // ---- UPDATE USER ----
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        updatingUser: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updatingUser: false,
        updatedUser: action.data,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updatingUser: false,
        error: action.error,
      };
    // ---- FETCH ALL USERS ----
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        fetchingAll: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchingAll: false,
        fetchedUsers: action.data,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingAll: false,
        error: action.error,
      };
  }
}
