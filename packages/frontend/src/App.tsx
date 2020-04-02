import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomeSection from './sections/HomeSection';
import LandingSection from './sections/Landing';
import ProfileSection from './sections/ProfileSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={LandingSection} />
          <Route path="/home" component={HomeSection} />
          <Route path="/profile" component={ProfileSection}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
