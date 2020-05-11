import { ISchool } from "@study-buddy/common";

export interface SchoolsState {
  fetchingAll: boolean;
  fetchedSchools?: ISchool[];

  error?: string;
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
  data: ISchool[];
}
export interface FetchSchoolsSuccessPayload {
  type: string;
  data: ISchool[];
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
  // fetch schools
  | FetchSchoolsRequestAction
  | FetchSchoolsSuccessAction
  | FetchSchoolsFailureAction;
