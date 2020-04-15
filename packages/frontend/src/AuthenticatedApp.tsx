import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { NavBarTop } from "./components/NavBarTop";
import { HomeSection } from "./sections/HomeSection";
import ProfileSection from "./sections/ProfileSection";
import { Footer } from "./components/Footer";

const AuthenticatedApp = () => {
  return (
    <HashRouter basename="/">
      <NavBarTop />
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route path="/home" component={HomeSection} />
        <Route path="/profile" component={ProfileSection} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default AuthenticatedApp;
