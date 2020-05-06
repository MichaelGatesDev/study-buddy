import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

import LandingSection from "./sections/Landing";
import ConnectSection from "./sections/ConnectSection";
import GenericNotFoundSection from "./sections/GenericNotFoundSection";

const UnauthenticatedApp = (): JSX.Element => {
  return (
    <>
      <Route exact path="/" component={LandingSection} />
      <Route path="/connect" component={ConnectSection} />
      <Route component={GenericNotFoundSection} />
    </>
  );
};

export default withRouter(UnauthenticatedApp);
