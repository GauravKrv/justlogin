import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./logincomponent";
import Home from "./homepage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
