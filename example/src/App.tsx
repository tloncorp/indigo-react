import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sandbox from "./pages/Sandbox";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "@tlon/indigo-tokens";
import { theme as localTheme } from "indigo-react";

const Style = createGlobalStyle`
${localTheme.cssReset}
`

const Root = styled.div`
  font-family: ${p => theme.fonts.sans};
  line-height: ${p => theme.lineHeights.regular};

  background-color: ${p => {
    if (p.theme.dark) return theme.colors.black
    return theme.colors.white
  }};
`;

export default class App extends React.Component {
  state = {
    color: {
      black: '#000000',
      grayDarkest: '#333333',
      grayDark: '#4d4d4d',
      gray: '#7f7f7f',
      grayMid: '#b1b1b1',
      grayLight: '#d6d6d6',
      grayLightest: '#f9f9f9',
      white: '#ffffff',
      blue: '#4330fc',
      blueLight: '#ecf6ff',
      blueDark: '#190d7b',
      redLight: '#f9d6ce',
      red: '#ee5432',
      redDark: '#c10d30',
      greenLight: '#bdebcc',
      green: '#2aa779',
      greenDark: '#286e55',
      yellowLight: '#ffefc5',
      yellow: '#fcc440',
      yellowDark: '#ee892b',
    },
    round: true,
    dark: false,
  }

  toggleDark() {
    this.setState({ dark: !this.state.dark })
  }

  toggleRound() {
    this.setState({ round: !this.state.round })
  }

  render() {
    return (
      <ThemeProvider
        theme={{
          color: this.state.color,
          round: this.state.round,
          dark: this.state.dark,
          ...localTheme
        }}>
        <Style/>
        <Root>
          <button onClick={() => this.toggleDark()}>Dark/Light</button>
          <button onClick={() => this.toggleRound()}>Square/Round</button>
          <Router basename="/indigo-react">
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/sandbox" component={Sandbox} />
            </div>
          </Router>
        </Root>
      </ThemeProvider>
    );
  }
}
