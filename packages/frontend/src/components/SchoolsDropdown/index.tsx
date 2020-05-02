import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import { SimpleDropdown } from "../SimpleDropdown";
import { AppState } from "../../redux/store";
import {
  SchoolState,
  FetchSchoolsSuccessPayload,
  FetchSchoolsFailurePayload,
} from "../../redux/schools/types";
import { AuthState } from "../../redux/auth/types";
import { fetchSchools } from "../../redux/schools/actions";

interface Props {
  schoolsState?: SchoolState;
  fetchSchools?: () => Promise<
    FetchSchoolsSuccessPayload | FetchSchoolsFailurePayload
  >;
  value?: number;
  onChange: (newValue: number) => void;
}

const SchoolsDropdown = (props: Props): JSX.Element => {
  useEffect(() => {
    props.fetchSchools?.();
  }, []);

  const schoolsState = props.schoolsState;
  if (schoolsState === undefined) {
    return <p>Undefined state: schools</p>;
  }

  const schools = schoolsState.fetchedSchools;
  if (schools === undefined) {
    return <p>Loading schools...</p>;
  }

  return (
    <SimpleDropdown
      required
      controlID="schoolsDropdown"
      label="Select school"
      selectLabel="Select school..."
      options={schools.map(school => {
        return { label: school.display_name, value: school.id };
      })}
      value={props.value}
      onChange={newValue => {
        const n = newValue !== undefined ? parseInt(newValue.toString()) : -1;
        props.onChange(n);
      }}
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  schoolsState: state.schools,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AuthState, void, Action>
) => ({
  fetchSchools(): Promise<
    FetchSchoolsSuccessPayload | FetchSchoolsFailurePayload
  > {
    return dispatch(fetchSchools());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SchoolsDropdown);
