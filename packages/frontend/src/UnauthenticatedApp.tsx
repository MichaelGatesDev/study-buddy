import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LandingSection from "./sections/Landing";
import ConnectSection from "./sections/ConnectSection";
import GenericNotFoundSection from "./sections/GenericNotFoundSection";

const UnauthenticatedApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingSection} />
      <Route path="/connect" component={ConnectSection} />
      <Route path="/404" component={GenericNotFoundSection} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default UnauthenticatedApp;
