import React from "react";
import {
  StyledDiv,
  StyledA,
  StyledUl,
  StyledH1,
  StyledFlex,
  StyledLi
} from "indigo-react";

import Color from "../components/Color";
import Typescale from "../components/Typescale";
import Approach from "../components/Approach";
import Visual from "../components/Visual";

export default class IndexPage extends React.Component {
  render() {
    return (
      <StyledDiv pb={[12]}>
        <StyledDiv p={[5, 8, 9]} bg="blue.2" minHeight="100vh">
          <StyledFlex
            justifyContent="space-between"
            alignItems="top"
            maxWidth="700px"
          >
            <StyledDiv>
              <StyledH1 color="white" mb={[7]}>
                Indigo
              </StyledH1>
              <StyledUl p="0">
                <StyledLi mb={[3]}>
                  <StyledA color="white" href="#Approach">
                    Approach
                  </StyledA>
                </StyledLi>

                <StyledLi mb={[3]}>
                  <StyledA color="white" href="#Visual">
                    Elements
                  </StyledA>
                </StyledLi>
                <StyledLi mb={[3]}>
                  <StyledA color="white" href="#Typescale">
                    Typescale
                  </StyledA>
                </StyledLi>
                <StyledLi mb={[3]}>
                  <StyledA color="white" href="#Color">
                    Color
                  </StyledA>
                </StyledLi>
                <StyledLi mb={[3]}>
                  <StyledA color="white" href="#Layout">
                    Layout
                  </StyledA>
                </StyledLi>
              </StyledUl>
            </StyledDiv>
            <StyledDiv>
              <StyledH1 color="white" mb={[7]}>
                Reference
              </StyledH1>
              <StyledUl p="0">
                <StyledLi mb={[3]}>
                  <StyledA color="white" href="#">
                    HTML
                  </StyledA>
                </StyledLi>
                <StyledLi mb={[3]}>
                  <StyledA color="white" href="#">
                    React
                  </StyledA>
                </StyledLi>
                <StyledLi mb={[3]}>
                  <StyledA color="white" href="#">
                    Utilities
                  </StyledA>
                </StyledLi>
              </StyledUl>
            </StyledDiv>
            <StyledDiv>
              <StyledH1 color="white" mb={[7]}>
                Downloads
              </StyledH1>
              <StyledUl p="0">
                <StyledLi mb={[3]}>
                  <StyledA
                    color="white"
                    href="https://www.npmjs.com/package/indigo-react"
                  >
                    indigo-react
                  </StyledA>
                </StyledLi>
                <StyledLi mb={[3]}>
                  <StyledA
                    color="white"
                    href="https://www.npmjs.com/package/indigo-tokens"
                  >
                    indigo-tokens
                  </StyledA>
                </StyledLi>
              </StyledUl>
            </StyledDiv>
            <StyledDiv>
              <StyledH1 color="white" mb={[7]}>
                Sources
              </StyledH1>
              <StyledUl p="0">
                <StyledLi mb={[3]}>
                  <StyledA
                    color="white"
                    href="https://github.com/urbit/indigo-react"
                  >
                    Github
                  </StyledA>
                </StyledLi>
                <StyledLi mb={[3]}>
                  <StyledA color="white" href="https://unpkg.com/indigo-react">
                    CDN
                  </StyledA>
                </StyledLi>
              </StyledUl>
            </StyledDiv>
          </StyledFlex>
        </StyledDiv>

        <StyledDiv p={[5, 8, 9]} id="Approach">
          <Approach />
        </StyledDiv>

        <StyledDiv p={[5, 8, 9]} id="Visual">
          <Visual />
        </StyledDiv>

        <StyledDiv p={[5, 8, 9]} id="Typescale">
          <Typescale />
        </StyledDiv>

        <StyledDiv p={[5, 8, 9]} id="Color">
          <Color />
        </StyledDiv>

        <StyledDiv p={[5, 8, 9]} id="Layout">
          <div>A section about layout.</div>
        </StyledDiv>
      </StyledDiv>
    );
  }
}
