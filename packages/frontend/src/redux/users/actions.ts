import { Dispatch } from "redux";

import {
  ActionSuccessResponse,
  IUser,
  ActionErrorResponse,
  GenericParams,
} from "@study-buddy/common";

import {
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

export const updateUser = (userID: number, updatedData: IUser) => async (
  dispatch: Dispatch
): Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload> => {
  dispatch({
    type: UPDATE_USER_REQUEST,
  });
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/users/${userID}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updated_user: updatedData,
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

    const respOk = json as ActionSuccessResponse<IUser>;
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

export type UpdateUserCourseAction = "add" | "remove";
export const updateUserCourse = (
  userID: number,
  courseID: number,
  action: UpdateUserCourseAction
) => async (
  dispatch: Dispatch
): Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload> => {
  dispatch({
    type: UPDATE_USER_REQUEST,
  });
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/users/${userID}/courses/${action}?course_id=${courseID}`,
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
        type: UPDATE_USER_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<IUser>;
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

export const fetchUsers = (params?: GenericParams) => async (
  dispatch: Dispatch
): Promise<FetchUsersSuccessPayload | FetchUsersFailurePayload> => {
  dispatch({
    type: FETCH_USERS_REQUEST,
  });
  try {
    const queryStr =
      params !== undefined
        ? `?${new URLSearchParams(params as any).toString()}`
        : "";

    const response = await fetch(
      `http://localhost:3000/api/v1/users/${queryStr}`,
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
        type: FETCH_USERS_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<IUser[]>;
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
