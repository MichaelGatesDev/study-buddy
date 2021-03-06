import { Dispatch } from "redux";

import {
  ActionSuccessResponse,
  ISchool,
  ActionErrorResponse,
  GenericParams,
} from "@study-buddy/common";

import {
  FETCH_SCHOOLS_REQUEST,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_FAILURE,
  FetchSchoolsSuccessPayload,
  FetchSchoolsFailurePayload,
} from "./types";

export const fetchSchools = (params?: GenericParams) => async (
  dispatch: Dispatch
): Promise<FetchSchoolsSuccessPayload | FetchSchoolsFailurePayload> => {
  dispatch({
    type: FETCH_SCHOOLS_REQUEST,
  });
  try {
    const queryStr =
      params !== undefined
        ? `?${new URLSearchParams(params as any).toString()}`
        : "";

    const response = await fetch(
      `http://localhost:3000/api/v1/schools${queryStr}`,
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
        type: FETCH_SCHOOLS_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<ISchool[]>;
    return dispatch({
      type: FETCH_SCHOOLS_SUCCESS,
      data: respOk.result,
    });
  } catch (error) {
    return dispatch({
      type: FETCH_SCHOOLS_FAILURE,
      error: error,
    });
  }
};
