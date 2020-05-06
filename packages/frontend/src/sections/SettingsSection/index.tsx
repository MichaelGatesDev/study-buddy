import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import { IUser, ISchool } from "@study-buddy/common";

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
  const history = useHistory();

  const [validated, setValidated] = useState<boolean>(false);

  const user = props.authState?.authedUser;
  const school = user?.school;

  const [settingSchool, setSettingSchool] = useState<number | undefined>(
    school?.id ?? -1
  );

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (settingSchool === -1) {
      alert("You must select a school!");
      return;
    }

    setValidated(true);
    console.log("Updating user...");
    props
      .updateUser({
        id: user?.id,
        school_id: settingSchool,
      } as IUser)
      .then((payload: UpdateUserSuccessPayload | UpdateUserFailurePayload) => {
        if (payload.type === UPDATE_USER_SUCCESS) {
          // payload = payload as AuthSuccessPayload;
          // const user = payload.data;
          console.log("Succesfully Updated user!");
          // alert("Settings saved!");
          // history.push("/");
          window.location.reload(); //TODO don't reload page, re-fetch user
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

  // console.log(user);

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
                value={settingSchool} //TODO set to user's current school
                onChange={(newValue: number): void => {
                  console.log("School dropdown value is: " + newValue);
                  setSettingSchool(newValue);
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
