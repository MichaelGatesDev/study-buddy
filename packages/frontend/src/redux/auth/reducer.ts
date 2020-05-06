import {
  AuthState,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AuthActionTypes,
  FETCH_AUTHENTICATED_USER_REQUEST,
  FETCH_AUTHENTICATED_USER_SUCCESS,
  FETCH_AUTHENTICATED_USER_FAILURE,
} from "./types";

const initialState: AuthState = {
  authenticating: false,
  authenticated: false,
  authInfo: undefined,

  fetchingAuthedUser: false,
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
    // auth
    case AUTH_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticating: false,
        authenticated: true,
        authInfo: action.data,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.error,
      };
    // fetch authed user
    case FETCH_AUTHENTICATED_USER_REQUEST:
      return {
        ...state,
        fetchingAuthedUser: true,
      };
    case FETCH_AUTHENTICATED_USER_SUCCESS:
      return {
        ...state,
        fetchingAuthedUser: false,
        authedUser: action.data,
      };
    case FETCH_AUTHENTICATED_USER_FAILURE:
      return {
        ...state,
        fetchingAuthedUser: false,
        error: action.error,
      };
  }
}
