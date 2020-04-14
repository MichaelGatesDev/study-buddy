import "./App.css";

import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// -- START BOOTSTRAP --
import "popper.js/dist/umd/popper.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.slim";
// -- END BOOTSTRAP --

import LandingSection from "./sections/Landing";
import { LandingTempSection } from "./sections/LandingTemp";
import ProfileSection from "./sections/ProfileSection";
import ConnectSection from "./sections/ConnectSection";
import { HomeSection } from "./sections/HomeSection";
import { NavBarTop } from "./components/NavBarTop";
import { Footer } from "./components/Footer";

import { store } from "./redux/store";
import Authenticator from "./components/Authenticator";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Authenticator />
        <HashRouter basename="/">
          <NavBarTop />
          <Switch>
            <Route exact path="/" component={LandingTempSection} />
            {/* <Route exact path="/" component={LandingSection} /> */}
            <Route path="/home" component={HomeSection} />
            <Route path="/connect" component={ConnectSection} />
            <Route path="/profile" component={ProfileSection} />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
