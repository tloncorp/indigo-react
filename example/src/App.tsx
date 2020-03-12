import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sandbox from "./pages/Sandbox";
import Buttons from "./pages/Buttons";
import ViewTest from "./pages/ViewTest";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import {light, dark} from "@tlon/indigo-tokens";
// import {light, dark} from "../theme/index";

import { light, dark, Box, IconButton, Row, Text } from "indigo-react";
import {
  color,
  ColorProps
} from 'styled-system';

const Style = createGlobalStyle`
    ${p => p.theme.reset}
    html {
      background-color: ${p => p.theme.colors.white};
    }
`

type RootProps = ColorProps & {}

const Root = styled.div<RootProps>`
  font-family: ${p => p.theme.fonts.sans};
  line-height: ${p => p.theme.lineHeights.regular};
  ${color};
`;


export default class App extends React.Component {
  state = {
    dark: false,
    theme: light,
    loading: false
  }

  toggleDark() {
    this.setState({ dark: !this.state.dark })
  }

  toggleLoading() {
    this.setState({ loading: !this.state.loading })
  }

  setTheme(name:string) {
    if (name === 'light') this.setState({ theme: light })
    if (name === 'dark') this.setState({ theme: dark })
    // if (name === 'black') this.setState({ theme: themeBlack })
  }

  render() {
    const { state } = this
    return (
      <ThemeProvider
        theme={this.state.dark ? dark : light }>
        <Style/>
        <Root>
          <Row alignItems='center' position='absolute' top='4' left='4'>
            <IconButton icon='Color' md p='0' onClick={() => this.toggleDark()}/>
          </Row>
          <Router basename="/indigo-react">
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/sandbox" render={
                p => <Sandbox toggleLoading={() => this.toggleLoading()} loading={state.loading} {...p} />
              } />
              <Route exact path="/buttons" component={Buttons} />
              <Route exact path='/viewtest' component={ViewTest} />
            </div>
          </Router>
        </Root>
      </ThemeProvider>
    );
  }
}
