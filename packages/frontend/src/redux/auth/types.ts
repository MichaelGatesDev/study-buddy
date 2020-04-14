import { User } from "@study-buddy/common";

export interface AuthState {
  authenticating: boolean;
  authedUser?: User;
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
  data: User;
}
interface AuthFailureAction {
  type: typeof AUTH_FAILURE;
  error: string;
}

export const PERFORM_UNAUTH = "PERFORM_UNAUTH";
export const PERFORM_UNAUTH_SUCCESS = "PERFORM_UNAUTH_SUCCESS";
export const PERFORM_UNAUTH_FAILURE = "PERFORM_UNAUTH_FAILURE";
interface PerformUnauthAction {
  type: typeof PERFORM_UNAUTH;
}
interface PerformUnauthActionSuccess {
  type: typeof PERFORM_UNAUTH_SUCCESS;
  data: User;
}
interface PerformUnauthActionFailure {
  type: typeof PERFORM_UNAUTH_FAILURE;
  error: string;
}

export type AuthActionTypes =
  | AuthRequestAction
  | AuthSuccessAction
  | AuthFailureAction
  | PerformUnauthAction
  | PerformUnauthActionSuccess
  | PerformUnauthActionFailure;
