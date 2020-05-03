import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { AppState } from "./redux/store";
import { NavBarTop } from "./components/NavBarTop";
import { HomeSection } from "./sections/HomeSection";
import ProfileSection from "./sections/ProfileSection";
import { Footer } from "./components/Footer";
import { AuthState } from "./redux/auth/types";
import {ChatSection} from "./sections/ChatSection";
import ForumSection from "./sections/ForumSection";

interface Props {
  authState: AuthState;
}

const AuthenticatedApp = (props: Props) => {
  return (
    <HashRouter basename="/">
      <NavBarTop authedUser={props.authState.authedUser} />
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route path="/home" component={HomeSection} />
        <Route path="/profile" component={ProfileSection} />
        <Route path ="/conversations" component={ChatSection}/>
        <Route path="/forum" component={ForumSection}/>
      </Switch>
      <Footer />
    </HashRouter>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
});

export default connect(mapStateToProps, {})(AuthenticatedApp);
