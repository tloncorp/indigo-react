import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sandbox from "./pages/Sandbox";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import theme from "@tlon/indigo-tokens";
import { theme, themeBlack, themeDark } from "indigo-react";
import {
  color,
  ColorProps
} from 'styled-system';
const Style = createGlobalStyle`
  ${theme.cssReset}
`
type RootProps = ColorProps & {}

const Root = styled.div<RootProps>`
  font-family: ${p => theme.fonts.sans};
  line-height: ${p => theme.lineHeights.regular};
  ${color};
`;

Root.defaultProps = {
  backgroundColor:'white'
}

export default class App extends React.Component {
  state = {
    dark: false,
    theme: theme,
  }

  toggleDark() {
    this.setState({ dark: !this.state.dark })
  }

  setTheme(name) {
    if (name === 'light') this.setState({ theme: theme })
    if (name === 'dark') this.setState({ theme: themeDark })
    if (name === 'black') this.setState({ theme: themeBlack })
  }
  
  render() {
    const { state } = this
    return (
      <ThemeProvider
        theme={state.theme}>
        <Style/>
        <Root>
          <button onClick={() => this.setTheme('dark')}>Dark</button>
          <button onClick={() => this.setTheme('light')}>Light</button>
          <button onClick={() => this.setTheme('black')}>Black</button>
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
