import { Dispatch } from "redux";

import {
  ActionSuccessResponse,
  ISchool,
  ActionErrorResponse,
} from "@study-buddy/common";

import {
  FETCH_SCHOOL_REQUEST,
  FETCH_SCHOOL_FAILURE,
  FETCH_SCHOOL_SUCCESS,
  FetchSchoolSuccessPayload,
  FetchSchoolFailurePayload,
  FETCH_SCHOOLS_REQUEST,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_FAILURE,
  FetchSchoolsSuccessPayload,
  FetchSchoolsFailurePayload,
} from "./types";

export const fetchSchool = (schoolID: number) => async (
  dispatch: Dispatch
): Promise<FetchSchoolSuccessPayload | FetchSchoolFailurePayload> => {
  dispatch({
    type: FETCH_SCHOOL_REQUEST,
  });
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/schools/${schoolID}`,
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
        type: FETCH_SCHOOL_FAILURE,
        error: respErr.error,
      });
    }

    const respOk = json as ActionSuccessResponse<ISchool>;
    return dispatch({
      type: FETCH_SCHOOL_SUCCESS,
      data: respOk.result,
    });
  } catch (error) {
    return dispatch({
      type: FETCH_SCHOOL_FAILURE,
      error: error,
    });
  }
};

export const fetchSchools = () => async (
  dispatch: Dispatch
): Promise<FetchSchoolsSuccessPayload | FetchSchoolsFailurePayload> => {
  dispatch({
    type: FETCH_SCHOOLS_REQUEST,
  });
  try {
    const response = await fetch(`http://localhost:3000/api/v1/schools/`, {
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
        type: FETCH_SCHOOL_FAILURE,
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
