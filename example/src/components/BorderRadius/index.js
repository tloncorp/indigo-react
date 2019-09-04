import React from "react";
import {Div, P, Ul, Li } from "indigo-react";

const BorderRadius = () => (
  <React.Fragment>
      <Div flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[8]}>radius.1</Li>

        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[8]}>4px</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Example</P>
        <Div border="0" bg="gray.4" p={[2]} mb={[4]} borderRadius="4px">No Border</Div>
      </Div>
  </React.Fragment>
);

export default BorderRadius;
