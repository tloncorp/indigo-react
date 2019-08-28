import React from "react";
import { Div, Box, H4, P } from "indigo-react";

import Color from "../components/Color";
import Typescale from "../components/Typescale";
import Approach from "../components/Approach";
import Visual from "../components/Visual";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Div pb={[12]}>
        <Box p={[5, 8, 9]}>
          <H4>●◆▲</H4>
          <H4 pt={[4]}>Indigo</H4>
          <H4>This is our styleguide for Urbit’s interfaces </H4>
        </Box>
        <Box p={[5, 8, 9]}>
          <H4>Getting Started</H4>
          <P fontFamily="mono">indigo-tokens</P>
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
