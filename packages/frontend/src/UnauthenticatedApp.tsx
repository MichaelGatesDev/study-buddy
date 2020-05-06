import React from "react";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";

import LandingSection from "./sections/Landing";
import ConnectSection from "./sections/ConnectSection";
import GenericNotFoundSection from "./sections/GenericNotFoundSection";

const UnauthenticatedApp = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={LandingSection} />
      <Route path="/connect" component={ConnectSection} />
      <Route component={GenericNotFoundSection} />
    </Switch>
  );
};

export default withRouter(UnauthenticatedApp);
