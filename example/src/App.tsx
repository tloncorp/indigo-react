import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  color,
  ColorProps
} from 'styled-system';
import { light, dark, darkAlt, Box, IconButton, Row, Text } from "indigo-react";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog"
import CatalogPage from "./pages/CatalogPage"
import Header from './components/Header'

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
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      theme: light,
      themeName: 'Light',
      menuOpen: false,
      loading: false
    };
    this.setTheme = this.setTheme.bind(this);
  }


  componentDidMount() {
    // window.addEventListener('keydown', (e) => {
    //   if (e.keyCode === 68) this.toggleDark()
    //   return
    // })
  }

  toggleDark() {
    this.setState({ dark: !this.state.dark })
  }

  toggleLoading() {
    this.setState({ loading: !this.state.loading })
  }

  setTheme(name:string) {
    if (name === 'light') this.setState({
      theme: light,
      themeName: 'Light'
    })
    if (name === 'dark') this.setState({
      theme: dark,
      themeName: 'Dark'
    })
    if (name === 'darkAlt') this.setState({
      theme: darkAlt,
      themeName: 'Dark Alt'
    })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }


  render() {
    const { state } = this

    const actions = {
      setTheme: this.setTheme,
      toggleMenu: this.toggleMenu,
    }

    const data = {
      themeName: this.state.themeName
    }

    return (
      <ThemeProvider
        theme={this.state.theme }>
        <Style/>
        <Root>
          {
            // <Row alignItems='center' position='absolute' top='4' left='4'>
            //   <IconButton icon='Color' md p='0' onClick={() => this.toggleDark()}/>
            //  </Row>
          }
          <Header actions={actions} data={data} />

          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/catalog" component={Catalog} />
              <Route path={`/catalog/:componentId`} component={CatalogPage}/>
              {
                // <Route exact path="/sandbox" component={Sandbox} />
                // <Route exact path="/buttons" component={Buttons} />
                // <Route exact path='/viewtest' component={ViewTest} />
                // <Route exact path='/editor' component={Editor} />
              }

            </div>
          </Router>
        </Root>
      </ThemeProvider>
    );
  }
}
