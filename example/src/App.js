import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import PrimitivesPage from "./pages/PrimitivesPage";
import DesignTokensPage from "./pages/DesignTokensPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IndexPage} />
          <Route path="/design-tokens" component={DesignTokensPage} />
          <Route path="/primitives" component={PrimitivesPage} />
        </div>
      </Router>
    );
  }
}
