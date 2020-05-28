import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  color,
  ColorProps
} from 'styled-system';
import { cssReset, Box, Rule } from "@tlon/indigo-react";
import { light, dark, inverted, paperDark, paperLight } from "@tlon/indigo-tokens";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog"
import CatalogPage from "./pages/CatalogPage"
import Header from './components/Header'
import FooterHeading from './components/FooterHeading'
import FooterNav from './components/FooterNav'
import Copyright from './components/Copyright'


import { sequence, randomInt } from './utils'
import { useLockBodyScroll, usePrefersDarkMode } from './hooks'

// import Sandbox from './pages/Sandbox'
const Style = createGlobalStyle`
  ${cssReset}
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

const generate2dMatrix = (rows:number, cols:number, f:Function) => {
  return sequence(rows).map(_ => sequence(cols).map(_ => f()))
}

const Visibility = styled.div`
  visibility: ${p => p.hidden ? 'hidden' : 'visible'};
  pointer-events: ${p => p.hidden ? 'none' : 'auto'};
  opacity: ${p => p.hidden ? '0' : '1'};
  z-index: ${p => p.hidden ? '-99' : '10'};
`

const MenuOverlay = ({data, actions}) => {
  useLockBodyScroll();
  return (
    <Visibility hidden={false}>
      <Box
        backgroundColor='gray0'
        width='100vw' 
        height='calc(100vh - 64px)' 
        position='relative' 
        top='0px' 
        left='0'>
        
        <Rule />
        <FooterNav />
    
      </Box>
    </Visibility>

  ) 
}

const MenuOverlayController = ({data, actions}) => {
  if (!data.menuOpen) {
    return null
  } else {
    return <MenuOverlay data={data} actions={actions}/>
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: light,
      themeName: 'Light',
      menuOpen: false,
      loading: false,
      matrix: null,
    };
    this.setTheme = this.setTheme.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this)
  }


  componentDidMount() {
    // generate a matrix for the hexagonal grid hero graphic
    const matrix = generate2dMatrix(64, 64, () => randomInt(0, 19));
    this.setState({ matrix });
    //  console.log(matrix)
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
    if (name === 'inverted') this.setState({
      theme: inverted,
      themeName: 'Inverted'
    })
    if (name === 'paperLight') this.setState({
      theme: paperLight,
      themeName: 'Paper Light'
    })
    if (name === 'paperDark') this.setState({
      theme: paperDark,
      themeName: 'Paper Dark'
    })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }


  render() {
    const { state } = this

    const darkmode = usePrefersDarkMode()

    console.log(darkmode)

    const actions = {
      setTheme: this.setTheme,
      toggleMenu: this.toggleMenu,
    }

    const data = {
      themeName: this.state.themeName,
      menuOpen: this.state.menuOpen,
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
          


          


          <Router>
            <Header actions={actions} data={data} />
            <MenuOverlayController actions={actions} data={data} />
            <div>
              <Route exact path="/" render={() => <Home matrix={state.matrix}/>} />
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
          <Rule />
          <FooterHeading />
          <FooterNav />
          <Copyright />
        </Root>
      </ThemeProvider>
    );
  }
}
