import { IUser, IAuthInfo } from "@study-buddy/common";

export interface AuthState {
  authenticating: boolean;
  authenticated: boolean;
  authInfo?: IAuthInfo;

  fetchingAuthedUser: boolean;
  authedUser?: IUser;

  error?: string;
}

// ---- AUTHENTICATE ---- \\
export const AUTH_REQUEST = "PERFORM_AUTH";
export const AUTH_SUCCESS = "PERFORM_AUTH_SUCCESS";
export const AUTH_FAILURE = "PERFORM_AUTH_FAILURE";
interface AuthRequestAction {
  type: typeof AUTH_REQUEST;
}
interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
  data: IAuthInfo;
}
export interface AuthSuccessPayload {
  type: string;
  data: IAuthInfo;
}
interface AuthFailureAction {
  type: typeof AUTH_FAILURE;
  error: string;
}
export interface AuthFailurePayload {
  type: string;
  error: string;
}

// ---- UNAUTHENTICATE ---- \\
export const UNAUTH = "UNAUTH";
interface UnauthAction {
  type: typeof UNAUTH;
}

// ---- FETCH AUTHENTICATED USER ---- \\
export const FETCH_AUTHENTICATED_USER_REQUEST =
  "PERFORM_FETCH_AUTHENTICATED_USER";
export const FETCH_AUTHENTICATED_USER_SUCCESS =
  "PERFORM_FETCH_AUTHENTICATED_USER_SUCCESS";
export const FETCH_AUTHENTICATED_USER_FAILURE =
  "PERFORM_FETCH_AUTHENTICATED_USER_FAILURE";
interface FetchAuthenticatedUserRequestAction {
  type: typeof FETCH_AUTHENTICATED_USER_REQUEST;
}
interface FetchAuthenticatedUserSuccessAction {
  type: typeof FETCH_AUTHENTICATED_USER_SUCCESS;
  data: IUser;
}
export interface FetchAuthenticatedUserSuccessPayload {
  type: string;
  data: IUser;
}
interface FetchAuthenticatedUserFailureAction {
  type: typeof FETCH_AUTHENTICATED_USER_FAILURE;
  error: string;
}
export interface FetchAuthenticatedUserFailurePayload {
  type: string;
  error: string;
}

export type AuthActionTypes =
  // auth
  | AuthRequestAction
  | AuthSuccessAction
  | AuthFailureAction
  // unauth
  | UnauthAction
  // fetch authed user
  | FetchAuthenticatedUserRequestAction
  | FetchAuthenticatedUserSuccessAction
  | FetchAuthenticatedUserFailureAction;
