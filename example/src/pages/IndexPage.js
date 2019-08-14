import React from "react";
import { Div, Box, H3, StyledA, Ul, H1, Flex, Li } from "indigo-react";

import Color from "../components/Color";
import Typescale from "../components/Typescale";
import Approach from "../components/Approach";
import Visual from "../components/Visual";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Div pb={[12]}>
        <Box p={[5, 8, 9]} bg="blue.2" minHeight="100vh">
          <Flex
            justifyContent="space-between"
            alignItems="top"
            maxWidth="700px"
          >
            <Div>
              <H3 color="white" mb={[7]}>
                Indigo
              </H3>
              <Ul p="0">
                <Li mb={[3]}>
                  <StyledA color="white" href="#Approach">
                    Approach
                  </StyledA>
                </Li>

                <Li mb={[3]}>
                  <StyledA color="white" href="#Visual">
                    Elements
                  </StyledA>
                </Li>
                <Li mb={[3]}>
                  <StyledA color="white" href="#Typescale">
                    Typescale
                  </StyledA>
                </Li>
                <Li mb={[3]}>
                  <StyledA color="white" href="#Color">
                    Color
                  </StyledA>
                </Li>
                <Li mb={[3]}>
                  <StyledA color="white" href="#Layout">
                    Layout
                  </StyledA>
                </Li>
              </Ul>
            </Div>
            <Div>
              <H3 color="white" mb={[7]}>
                Reference
              </H3>
              <Ul p="0">
                <Li mb={[3]}>
                  <StyledA color="white" href="#">
                    HTML
                  </StyledA>
                </Li>
                <Li mb={[3]}>
                  <StyledA color="white" href="#">
                    React
                  </StyledA>
                </Li>
                <Li mb={[3]}>
                  <StyledA color="white" href="#">
                    Utilities
                  </StyledA>
                </Li>
              </Ul>
            </Div>
            <Div>
              <H3 color="white" mb={[7]}>
                Downloads
              </H3>
              <Ul p="0">
                <Li mb={[3]}>
                  <StyledA
                    color="white"
                    href="https://www.npmjs.com/package/indigo-react"
                  >
                    indigo-react
                  </StyledA>
                </Li>
                <Li mb={[3]}>
                  <StyledA
                    color="white"
                    href="https://www.npmjs.com/package/indigo-tokens"
                  >
                    indigo-tokens
                  </StyledA>
                </Li>
              </Ul>
            </Div>
            <Div>
              <H3 color="white" mb={[7]}>
                Sources
              </H3>
              <Ul p="0">
                <Li mb={[3]}>
                  <StyledA
                    color="white"
                    href="https://github.com/urbit/indigo-react"
                  >
                    Github
                  </StyledA>
                </Li>
                <Li mb={[3]}>
                  <StyledA color="white" href="https://unpkg.com/indigo-react">
                    CDN
                  </StyledA>
                </Li>
              </Ul>
            </Div>
          </Flex>
        </Box>

        <Div p={[5, 8, 9]} id="Approach">
          <Approach />
        </Div>

        <Div p={[5, 8, 9]} id="Visual">
          <Visual />
        </Div>

        <Div p={[5, 8, 9]} id="Typescale">
          <Typescale />
        </Div>

        <Div p={[5, 8, 9]} id="Color">
          <Color />
        </Div>

        <Div p={[5, 8, 9]} id="Layout">
          <div>A section about layout.</div>
        </Div>
      </Div>
    );
  }
}
