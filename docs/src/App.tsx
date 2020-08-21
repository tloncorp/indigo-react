import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col, Text, Reset, _light as light } from "local-indigo-react";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { ComponentPage } from "./pages/ComponentPage";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Reset />
      <Router>
        <Row height="100vh">
          <Sidebar />
          <Col>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/component/:id" component={ComponentPage} />
            </Switch>
          </Col>
        </Row>
      </Router>
    </ThemeProvider>
  );
};
