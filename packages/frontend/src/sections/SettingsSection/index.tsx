import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import { IUser } from "@study-buddy/common";

import { AppState } from "../../redux/store";
import { AuthState } from "../../redux/auth/types";
import { SchoolState } from "../../redux/schools/types";
import {
  UserState,
  UpdateUserFailurePayload,
  UpdateUserSuccessPayload,
  UPDATE_USER_SUCCESS,
} from "../../redux/users/types";
import SchoolsDropdown from "../../components/SchoolsDropdown";
import { updateUser } from "../../redux/users/actions";

interface Props {
  authState: AuthState;

  schoolsState: SchoolState;

  usersState: UserState;
  updateUser: (
    user: IUser
  ) => Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload>;
}

const SettingsSection = (props: Props): JSX.Element => {
  const [validated, setValidated] = useState<boolean>(false);
  const [selectedSchoolID, setSelectedSchoolID] = useState<number>(-1);

  const user = props.authState?.authedUser;

  useEffect(() => {
    setSelectedSchoolID(user?.school_id ?? -1);
  }, [user]);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (selectedSchoolID === -1) {
      alert("You must select a school!");
      return;
    }

    setValidated(true);
    console.log("Updating user...");
    props
      .updateUser({
        id: user?.id,
        school_id: selectedSchoolID,
      } as IUser)
      .then((payload: UpdateUserSuccessPayload | UpdateUserFailurePayload) => {
        if (payload.type === UPDATE_USER_SUCCESS) {
          // payload = payload as AuthSuccessPayload;
          // const user = payload.data;
          console.log("Succesfully Updated user!");
          // alert("Settings saved!");

          // reload so we can fetch newest
          window.location.reload();
        } else {
          payload = payload as UpdateUserFailurePayload;
          console.error("Failed to update user!");
          console.error(payload.error);
        }
      })
      .catch((err: any) => {
        console.error("Failed to update user!");
        console.error(err);
      });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mt-4">Update Profile</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form onSubmit={onFormSubmit} noValidate validated={validated}>
              <SchoolsDropdown
                value={selectedSchoolID} //TODO set to user's current school
                onChange={(newValue: number): void => {
                  console.log("School dropdown value is: " + newValue);
                  setSelectedSchoolID(newValue);
                }}
              />
              <Button variant="success" type="submit" className="w-100 mb-4">
                Save
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
  schoolsState: state.schools,
  usersState: state.users,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AuthState, void, Action>
) => ({
  updateUser(
    user: IUser
  ): Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload> {
    return dispatch(updateUser(user));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SettingsSection)
);
