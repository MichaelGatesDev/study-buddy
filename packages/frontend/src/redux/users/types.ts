import { User } from "@study-buddy/common";

export interface UserState {
  fetchingSingle: boolean;
  fetchedUser?: User;

  updatingUser: boolean;
  updatedUser?: User;

  fetchingAll: boolean;
  fetchedUsers?: User[];

  error?: string;
}

// ---- FETCH USER ---- \\
export const FETCH_USER_REQUEST = "PERFORM_FETCH_USER";
export const FETCH_USER_SUCCESS = "PERFORM_FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "PERFORM_FETCH_USER_FAILURE";
interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}
interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  data: User;
}
export interface FetchUserSuccessPayload {
  type: string;
  data: User;
}
interface FetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE;
  error: string;
}
export interface FetchUserFailurePayload {
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
  data: User;
}
export interface UpdateUserSuccessPayload {
  type: string;
  data: User;
}
interface UpdateUserFailureAction {
  type: typeof UPDATE_USER_FAILURE;
  error: string;
}
export interface UpdateUserFailurePayload {
  type: string;
  error: string;
}

// ---- FETCH USERS ---- \\
export const FETCH_USERS_REQUEST = "PERFORM_FETCH_USERS";
export const FETCH_USERS_SUCCESS = "PERFORM_FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "PERFORM_FETCH_USERS_FAILURE";
interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}
interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  data: User[];
}
export interface FetchUsersSuccessPayload {
  type: string;
  data: User[];
}
interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  error: string;
}
export interface FetchUsersFailurePayload {
  type: string;
  error: string;
}

export type UserActionTypes =
  // fetch user
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction
  // update user
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailureAction
  // fetch users
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;