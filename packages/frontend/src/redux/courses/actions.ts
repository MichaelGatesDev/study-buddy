import { Dispatch } from "redux";

import {
  ActionSuccessResponse,
  ICourse,
  ActionErrorResponse,
  GenericParams,
} from "@study-buddy/common";

import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FetchCoursesSuccessPayload,
  FetchCoursesFailurePayload,
} from "./types";

export const fetchCourses = (params?: GenericParams) => async (
  dispatch: Dispatch
): Promise<FetchCoursesSuccessPayload | FetchCoursesFailurePayload> => {
  dispatch({
    type: FETCH_COURSES_REQUEST,
  });
  try {
    const queryStr =
      params !== undefined
        ? `?${new URLSearchParams(params as any).toString()}`
        : "";

    const response = await fetch(
      `http://localhost:3000/api/v1/courses${queryStr}`,
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
        type: FETCH_COURSES_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<ICourse[]>;
    return dispatch({
      type: FETCH_COURSES_SUCCESS,
      data: respOk.result,
    });
  } catch (error) {
    return dispatch({
      type: FETCH_COURSES_FAILURE,
      error: error,
    });
  }
};
