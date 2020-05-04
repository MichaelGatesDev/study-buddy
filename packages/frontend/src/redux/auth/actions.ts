import { Dispatch } from "redux";
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AuthSuccessPayload,
  AuthFailurePayload,
} from "./types";

import {
  ActionSuccessResponse,
  IUser,
  ActionErrorResponse,
} from "@study-buddy/common";

export const performAuth = (idToken: string) => async (
  dispatch: Dispatch
): Promise<AuthSuccessPayload | AuthFailurePayload> => {
  dispatch({
    type: AUTH_REQUEST,
  });
  try {
    const response = await fetch("http://localhost:3000/api/v1/auth/connect", {
      method: "POST",
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

    const respOk = json as ActionSuccessResponse<IUser>;
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
