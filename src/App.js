import React from "react";
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './historyUtils';
import Home from './components/Home/Home';
import About from './components/About/About';

export default function BasicExample() {
  return (
    <Router history={history}>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
    );
}
