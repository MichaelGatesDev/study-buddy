import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { AppState } from "./redux/store";
import { AuthState } from "./redux/auth/types";
import { SchoolsState } from "./redux/schools/types";

import ForumSection from "./sections/ForumSection";
import HomeSection from "./sections/HomeSection";
import ChatSection from "./sections/ChatSection";
import Course from "./sections/Course";
import SettingsSection from "./sections/SettingsSection";

interface Props {
  authState?: AuthState;
  schoolsState?: SchoolsState;
}

const AuthenticatedApp = (props: Props): JSX.Element => {
  if (props.authState === undefined || props.schoolsState === undefined) {
    return <p>Loading states...</p>;
  }

  return (

    <>
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route path="/settings" component={SettingsSection} />
        <Route path="/forum" component={ForumSection} />
        <Route path="/conversations" component={ChatSection} />
        <Route path ="/course" component ={Course}/>
      </Switch>
    </>

  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
  schoolsState: state.schools,
});

export default withRouter(connect(mapStateToProps, {})(AuthenticatedApp));
