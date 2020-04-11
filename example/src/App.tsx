import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sandbox from "./pages/Sandbox";
import Buttons from "./pages/Buttons";
import ViewTest from "./pages/ViewTest";
import Editor from "./pages/Editor";

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

    strong {
      font-weight: 600;
    }
`

// const Style = createGlobalStyle`
//     ${p => p.theme.reset}
//     html {
//       background-color: ${p => p.theme.colors.white};
//       max-height: 100vh;
//       min-height: 100vh;
//       overflow: hidden;
//       position: fixed;
//     }
//
//     body {
//       max-height: 100vh;
//       min-height: 100vh;
//       overflow: hidden;
//       position: fixed;
//     }
// `

type RootProps = ColorProps & {}

const Root = styled.div<RootProps>`
  font-family: ${p => p.theme.fonts.sans};
  line-height: ${p => p.theme.lineHeights.regular};
  ${color};
`;


export default class App extends React.Component {
  state = {
    dark: true,
    theme: light,
    loading: false
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 68) this.toggleDark()
      return
    })
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
          {
            // <Row alignItems='center' position='absolute' top='4' left='4'>
            //   <IconButton icon='Color' md p='0' onClick={() => this.toggleDark()}/>
            //  </Row>
          }

          <Router basename="/indigo-react">
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Route exact path="/buttons" component={Buttons} />
              <Route exact path='/viewtest' component={ViewTest} />
              <Route exact path='/editor' component={Editor} />
            </div>
          </Router>
        </Root>
      </ThemeProvider>
    );
  }
}
