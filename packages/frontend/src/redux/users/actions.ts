import { Dispatch } from "redux";

import {
  ActionSuccessResponse,
  User,
  ActionErrorResponse,
} from "@study-buddy/common";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FetchUserSuccessPayload,
  FetchUserFailurePayload,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FetchUsersSuccessPayload,
  FetchUsersFailurePayload,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UpdateUserSuccessPayload,
  UpdateUserFailurePayload,
} from "./types";

export const fetchUser = (userID: number) => async (
  dispatch: Dispatch
): Promise<FetchUserSuccessPayload | FetchUserFailurePayload> => {
  dispatch({
    type: FETCH_USER_REQUEST,
  });
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/users/${userID}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      const respErr = json as ActionErrorResponse;
      return dispatch({
        type: FETCH_USER_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<User>;
    return dispatch({
      type: FETCH_USER_SUCCESS,
      data: respOk.result,
    });
  } catch (error) {
    return dispatch({
      type: FETCH_USER_FAILURE,
      error: error,
    });
  }
};

export const updateUser = (user: User) => async (
  dispatch: Dispatch
): Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload> => {
  dispatch({
    type: UPDATE_USER_REQUEST,
  });
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/users/${user.id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updated_user: user,
        }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      const respErr = json as ActionErrorResponse;
      return dispatch({
        type: UPDATE_USER_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<User>;
    return dispatch({
      type: UPDATE_USER_SUCCESS,
      data: respOk.result,
    });
  } catch (error) {
    return dispatch({
      type: UPDATE_USER_FAILURE,
      error: error,
    });
  }
};

export const fetchUsers = () => async (
  dispatch: Dispatch
): Promise<FetchUsersSuccessPayload | FetchUsersFailurePayload> => {
  dispatch({
    type: FETCH_USERS_REQUEST,
  });
  try {
    const response = await fetch(`http://localhost:3000/api/v1/users/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      const respErr = json as ActionErrorResponse;
      return dispatch({
        type: FETCH_USER_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<User[]>;
    return dispatch({
      type: FETCH_USERS_SUCCESS,
      data: respOk.result,
    });
  } catch (error) {
    return dispatch({
      type: FETCH_USERS_FAILURE,
      error: error,
    });
  }
};
