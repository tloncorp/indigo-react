import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPageNew";
import Sandbox from "./pages/Sandbox";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "@tlon/indigo-tokens";
// import { theme as localTheme } from "indigo-react";

const Style = createGlobalStyle`
  html { box-sizing: border-box }
  *, *:before, *:after { box-sizing: inherit; }
  body { margin: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
`;

const Root = styled.div`
  font-family: "Inter", Helvetica, Arial, sans-serif;
  line-height: 1.5;
`;

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{dark:true, ...theme}}>
        <Root>
          <Style />
          <Router basename="/indigo-react">
            <div>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/sandbox" component={Sandbox} />
            </div>
          </Router>
        </Root>
      </ThemeProvider>
    );
  }
}
