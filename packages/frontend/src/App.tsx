import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

// -- START BOOTSTRAP --
import "popper.js/dist/umd/popper.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.slim";
import AppBase from "./AppBase";
import { store } from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter basename="/">
          <AppBase />
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
