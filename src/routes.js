import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard";

//history
import { history } from "./helpers/history";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <RouteGuard exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
