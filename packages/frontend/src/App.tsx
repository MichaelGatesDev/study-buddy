import "./App.css";

import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// -- START BOOTSTRAP --
import "popper.js/dist/umd/popper.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.slim";
// -- END BOOTSTRAP --

import LandingSection from "./sections/Landing";
import ProfileSection from "./sections/ProfileSection";
import { AuthSection } from "./sections/AuthSection";
import { HomeSection } from "./sections/HomeSection";

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={LandingSection} />
          <Route path="/home" component={HomeSection} />
          <Route path="/auth" component={AuthSection} />
          <Route path="/profile" component={ProfileSection} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
