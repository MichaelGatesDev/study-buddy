import "./App.css";

import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import AuthSection from "./sections/AuthSection";
import LandingSection from "./sections/Landing";
import ProfileSection from "./sections/ProfileSection";

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={LandingSection} />
          <Route path="/auth" component={AuthSection} />
          <Route path="/profile" component={ProfileSection} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
