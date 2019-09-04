import React from "react";
import {Div, P, Ul, Li } from "indigo-react";

const Border = () => (
  <React.Fragment>
      <Div flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[8]}>border.0</Li>
          <Li height={[6]} mb={[4]}>border.1</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[8]}>0</Li>
          <Li height={[6]} mb={[4]}>1px solid</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Example</P>
        <Div border="0" bg="gray.4" p={[2]} mb={[4]}>No Border</Div>
        <Div border="1px solid" bg="gray.4" p={[2]}>Border</Div>
      </Div>
  </React.Fragment>
);

export default Border;
