import { Dispatch } from "redux";

import {
  ActionSuccessResponse,
  IUser,
  ActionErrorResponse,
  IAuthInfo,
} from "@study-buddy/common";

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AuthSuccessPayload,
  AuthFailurePayload,
  FetchAuthenticatedUserSuccessPayload,
  FetchAuthenticatedUserFailurePayload,
  FETCH_AUTHENTICATED_USER_SUCCESS,
  FETCH_AUTHENTICATED_USER_REQUEST,
  FETCH_AUTHENTICATED_USER_FAILURE,
  UNAUTH,
} from "./types";

export const authenticate = (idToken: string) => async (
  dispatch: Dispatch
): Promise<AuthSuccessPayload | AuthFailurePayload> => {
  dispatch({
    type: AUTH_REQUEST,
  });
  try {
    const response = await fetch("http://localhost:3000/api/v1/auth/connect", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: idToken,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      const respErr = json as ActionErrorResponse;
      return dispatch({
        type: AUTH_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<IAuthInfo>;
    return dispatch({
      type: AUTH_SUCCESS,
      data: respOk.result,
    });
  } catch (error) {
    return dispatch({
      type: AUTH_FAILURE,
      error: error,
    });
  }
};

export const unauthenticate = () => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({
    type: UNAUTH,
  });
};

export const fetchAuthenticatedUser = (
  email: string,
  googleID: string
) => async (
  dispatch: Dispatch
): Promise<
  FetchAuthenticatedUserSuccessPayload | FetchAuthenticatedUserFailurePayload
> => {
  dispatch({
    type: FETCH_AUTHENTICATED_USER_REQUEST,
  });
  try {
    const response = await fetch("http://localhost:3000/api/v1/auth/", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        google_id: googleID,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      const respErr = json as ActionErrorResponse;
      return dispatch({
        type: FETCH_AUTHENTICATED_USER_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<IUser>;
    return dispatch({
      type: FETCH_AUTHENTICATED_USER_SUCCESS,
      data: respOk.result,
    });
  } catch (error) {
    return dispatch({
      type: FETCH_AUTHENTICATED_USER_FAILURE,
      error: error,
    });
  }
};
