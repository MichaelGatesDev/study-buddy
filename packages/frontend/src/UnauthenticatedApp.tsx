import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { NavBarTop } from "./components/NavBarTop";
import ProfileSection from "./sections/ProfileSection";
import { Footer } from "./components/Footer";
import { LandingTempSection } from "./sections/LandingTemp";
import ConnectSection from "./sections/ConnectSection";

const UnauthenticatedApp = () => {
  return (
    <HashRouter basename="/">
      <NavBarTop />
      <Switch>
        <Route exact path="/" component={LandingTempSection} />
        <Route path="/connect" component={ConnectSection} />
        <Route path="/profile" component={ProfileSection} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default UnauthenticatedApp;