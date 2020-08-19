import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useState } from "react";
import { Col, Text, Reset, _light as light } from "local-indigo-react";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { ComponentPage } from "./pages/ComponentPage";

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Reset />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/component/:id" component={ComponentPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
