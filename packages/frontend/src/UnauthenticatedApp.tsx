import React from "react";
import { Switch, Route } from "react-router-dom";
import ProfileSection from "./sections/ProfileSection";
import LandingSection from "./sections/Landing";
import ConnectSection from "./sections/ConnectSection";

const UnauthenticatedApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingSection} />
      <Route path="/connect" component={ConnectSection} />
      <Route path="/profile" component={ProfileSection} />
    </Switch>
  );
};

export default UnauthenticatedApp;
