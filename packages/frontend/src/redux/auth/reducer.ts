import {
  AuthActionTypes,
  AuthState,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from "./types";

const initialState: AuthState = {
  authenticating: false,
  authedUser: undefined,
  error: undefined,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    default:
      return state;
    case AUTH_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticating: false,
        authedUser: action.data,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.error,
      };
  }
}
