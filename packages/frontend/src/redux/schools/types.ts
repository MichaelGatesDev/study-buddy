import { School } from "@study-buddy/common";

export interface SchoolState {
  fetchingSingle: boolean;
  fetchingAll: boolean;
  fetchedSchool?: School;
  fetchedSchools?: School[];
  error?: string;
}

// ---- FETCH SCHOOL ---- \\
export const FETCH_SCHOOL_REQUEST = "PERFORM_FETCH_SCHOOL";
export const FETCH_SCHOOL_SUCCESS = "PERFORM_FETCH_SCHOOL_SUCCESS";
export const FETCH_SCHOOL_FAILURE = "PERFORM_FETCH_SCHOOL_FAILURE";
interface FetchSchoolRequestAction {
  type: typeof FETCH_SCHOOL_REQUEST;
}
interface FetchSchoolSuccessAction {
  type: typeof FETCH_SCHOOL_SUCCESS;
  data: School;
}
export interface FetchSchoolSuccessPayload {
  type: string;
  data: School;
}
interface FetchSchoolFailureAction {
  type: typeof FETCH_SCHOOL_FAILURE;
  error: string;
}
export interface FetchSchoolFailurePayload {
  type: string;
  error: string;
}

// ---- FETCH SCHOOLS ---- \\
export const FETCH_SCHOOLS_REQUEST = "PERFORM_FETCH_SCHOOLS";
export const FETCH_SCHOOLS_SUCCESS = "PERFORM_FETCH_SCHOOLS_SUCCESS";
export const FETCH_SCHOOLS_FAILURE = "PERFORM_FETCH_SCHOOLS_FAILURE";
interface FetchSchoolsRequestAction {
  type: typeof FETCH_SCHOOLS_REQUEST;
}
interface FetchSchoolsSuccessAction {
  type: typeof FETCH_SCHOOLS_SUCCESS;
  data: School[];
}
export interface FetchSchoolsSuccessPayload {
  type: string;
  data: School[];
}
interface FetchSchoolsFailureAction {
  type: typeof FETCH_SCHOOLS_FAILURE;
  error: string;
}
export interface FetchSchoolsFailurePayload {
  type: string;
  error: string;
}

export type SchoolActionTypes =
  // fetch school
  | FetchSchoolRequestAction
  | FetchSchoolSuccessAction
  | FetchSchoolFailureAction
  // fetch schools
  | FetchSchoolsRequestAction
  | FetchSchoolsSuccessAction
  | FetchSchoolsFailureAction;
