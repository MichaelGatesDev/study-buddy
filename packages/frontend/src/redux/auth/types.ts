import { IUser } from "@study-buddy/common";

export interface AuthState {
  authenticating: boolean;
  authenticated: boolean;
  authedUser?: IUser;
  error?: string;
}

export const AUTH_REQUEST = "PERFORM_AUTH";
export const AUTH_SUCCESS = "PERFORM_AUTH_SUCCESS";
export const AUTH_FAILURE = "PERFORM_AUTH_FAILURE";

interface AuthRequestAction {
  type: typeof AUTH_REQUEST;
}
interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
  data: IUser;
}
export interface AuthSuccessPayload {
  type: string;
  data: IUser;
}
interface AuthFailureAction {
  type: typeof AUTH_FAILURE;
  error: string;
}
export interface AuthFailurePayload {
  type: string;
  error: string;
}

// type Types = "PERFORM_AUTH" | "PERFORM_AUTH_SUCCESS" | "PERFORM_AUTH_FAILURE";
export type AuthActionTypes =
  | AuthRequestAction
  | AuthSuccessAction
  | AuthFailureAction;
