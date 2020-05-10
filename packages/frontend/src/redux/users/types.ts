import { IUser } from "@study-buddy/common";

export interface UserState {
  fetchingAll: boolean;
  fetchedUsers?: IUser[];

  updatingUser: boolean;
  updatedUser?: IUser;

  error?: string;
}

// ---- FETCH ALL USERS ---- \\
export const FETCH_USERS_REQUEST = "PERFORM_FETCH_USERS";
export const FETCH_USERS_SUCCESS = "PERFORM_FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "PERFORM_FETCH_USERS_FAILURE";
interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}
interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  data: IUser[];
}
export interface FetchUsersSuccessPayload {
  type: string;
  data: IUser[];
}
interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  error: string;
}
export interface FetchUsersFailurePayload {
  type: string;
  error: string;
}

// ---- UPDATE USER ---- \\
export const UPDATE_USER_REQUEST = "PERFORM_UPDATE_USER";
export const UPDATE_USER_SUCCESS = "PERFORM_UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "PERFORM_UPDATE_USER_FAILURE";
interface UpdateUserRequestAction {
  type: typeof UPDATE_USER_REQUEST;
}
interface UpdateUserSuccessAction {
  type: typeof UPDATE_USER_SUCCESS;
  data: IUser;
}
export interface UpdateUserSuccessPayload {
  type: string;
  data: IUser;
}
interface UpdateUserFailureAction {
  type: typeof UPDATE_USER_FAILURE;
  error: string;
}
export interface UpdateUserFailurePayload {
  type: string;
  error: string;
}

// ---- UPDATE USER COURSE ---- \\
export const UPDATE_USER_COURSE_REQUEST = "PERFORM_UPDATE_USER_COURSE";
export const UPDATE_USER_COURSE_SUCCESS = "PERFORM_UPDATE_USER_COURSE_SUCCESS";
export const UPDATE_USER_COURSE_FAILURE = "PERFORM_UPDATE_USER_COURSE_FAILURE";
interface UpdateUserCourseRequestAction {
  type: typeof UPDATE_USER_COURSE_REQUEST;
}
interface UpdateUserCourseSuccessAction {
  type: typeof UPDATE_USER_COURSE_SUCCESS;
  data: IUser;
}
export interface UpdateUserCourseSuccessPayload {
  type: string;
  data: IUser;
}
interface UpdateUserCourseFailureAction {
  type: typeof UPDATE_USER_COURSE_FAILURE;
  error: string;
}
export interface UpdateUserCourseFailurePayload {
  type: string;
  error: string;
}

export type UserActionTypes =
  // update user
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailureAction
  // update user course
  | UpdateUserCourseRequestAction
  | UpdateUserCourseSuccessAction
  | UpdateUserCourseFailureAction
  // fetch users
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
