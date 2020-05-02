import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { AppState } from "./redux/store";
import { AuthState } from "./redux/auth/types";
import { SchoolState } from "./redux/schools/types";
import HomeSection from "./sections/HomeSection";
import ProfileSection from "./sections/ProfileSection";
import { ChatSection } from "./sections/ChatSection";
import SettingsSection from "./sections/SettingsSection";
import UserCheck from "./components/UserCheck";

interface Props {
  authState?: AuthState;
  schoolsState?: SchoolState;
}

const AuthenticatedApp = (props: Props) => {
  if (props.authState === undefined || props.schoolsState === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <UserCheck />
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route path="/settings" component={SettingsSection} />
        <Route path="/profile" component={ProfileSection} />
        <Route path="/conversations" component={ChatSection} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
  schoolsState: state.schools,
});

export default connect(mapStateToProps, {})(AuthenticatedApp);
