import { Dispatch } from "redux";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from "./types";

export const performAuth = (tokenID: string) => async (dispatch: Dispatch) => {
  console.log("Performing auth");
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
        token: tokenID,
      }),
    });

    // Bad response (error)
    if (!response.ok) {
      const error = await response.text();
      dispatch({
        type: AUTH_FAILURE,
        error,
      });
      return;
    }

    // Success response
    const json = await response.json();
    if (json.error !== undefined) {
      dispatch({
        type: AUTH_FAILURE,
        error: json.error,
      });
      return;
    }

    dispatch({
      type: AUTH_SUCCESS,
      data: json,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      error,
    });
  }
};
