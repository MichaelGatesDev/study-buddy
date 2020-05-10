import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import { IUser } from "@study-buddy/common";

import { AppState } from "../../redux/store";
import { AuthState } from "../../redux/auth/types";
import {
  SchoolsState,
  FetchSchoolsSuccessPayload,
  FetchSchoolsFailurePayload,
} from "../../redux/schools/types";
import {
  UserState,
  UpdateUserFailurePayload,
  UpdateUserSuccessPayload,
  UPDATE_USER_SUCCESS,
} from "../../redux/users/types";
import { updateUser } from "../../redux/users/actions";
import { SimpleDropdown } from "../../components/SimpleDropdown";
import { fetchSchools } from "../../redux/schools/actions";
import { SimpleAlert } from "../../components/SimpleAlert";

interface Props {
  authState: AuthState;

  schoolsState: SchoolsState;
  fetchSchools: () => Promise<
    FetchSchoolsSuccessPayload | FetchSchoolsFailurePayload
  >;

  usersState: UserState;
  updateUser: (
    userID: number,
    updatedData: IUser
  ) => Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload>;
}

const SettingsSection = (props: Props): JSX.Element => {
  const [validated, setValidated] = useState<boolean>(false);
  const [selectedSchoolID, setSelectedSchoolID] = useState<number>(-1);

  const user = props.authState.authedUser;
  const school = user?.school;

  useEffect(() => {
    props.fetchSchools();

    setSelectedSchoolID(school?.id ?? -1);
  }, [user]);

  if (user == null) {
    return (
      <SimpleAlert
        title="Failed to find the user object!"
        variant="danger"
        content="This probably occurred because the web client thinks that it is authenticated when infact it is not.. at least not properly."
      />
    );
  }

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
      .updateUser(user.id!, {
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
              <SimpleDropdown
                controlID="dropdown-school"
                label="School"
                selectLabel="Select a school..."
                options={
                  props.schoolsState.fetchedSchools?.map(school => {
                    return {
                      label: school.display_name ?? "Missing display_name",
                      value: school.id,
                    };
                  }) ?? []
                }
                value={selectedSchoolID}
                onChange={(newValue): void => {
                  console.log("New value: " + (newValue as number));
                  setSelectedSchoolID(newValue as number);
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
  fetchSchools(): Promise<
    FetchSchoolsSuccessPayload | FetchSchoolsFailurePayload
  > {
    return dispatch(fetchSchools());
  },
  updateUser(
    userID: number,
    updatedData: IUser
  ): Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload> {
    return dispatch(updateUser(userID, updatedData));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SettingsSection)
);
