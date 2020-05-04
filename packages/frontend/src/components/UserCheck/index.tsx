import React from "react";
import { AuthState } from "../../redux/auth/types";
import { SchoolState } from "../../redux/schools/types";
import { Redirect, useHistory } from "react-router";
import { SimpleAlert } from "../SimpleAlert";
import { AppState } from "../../redux/store";
import { connect } from "react-redux";

interface Props {
  authState: AuthState;
  schoolsState: SchoolState;
}

const UserCheck = (props: Props): JSX.Element | null => {
  const history = useHistory();

  const user = props.authState.authedUser;
  if (user === undefined || user === null) {
    return (
      <SimpleAlert
        title="Error"
        variant="danger"
        content="Critical error: failed to find authenticated user."
      />
    );
  }
  if (user.school === undefined || user.school === null) {
    if (history.location.pathname !== "/settings") {
      console.warn(
        "User is not registered to a school! Redirecting to settings..."
      );
      // history.push("/settings");
      return <Redirect to="/settings" />;
    }
    return null;
  }
  return null;
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
  schoolsState: state.schools,
});

const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(UserCheck);
