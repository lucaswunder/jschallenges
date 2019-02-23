import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
