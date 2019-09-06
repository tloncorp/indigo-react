import React from "react";
import {Box, P, Ul, Li } from "indigo-react";

const FontWeight = () => (
  <React.Fragment>
      <Box flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li mb={[4]}>fontWeight.1</Li>
          <Li mb={[4]}>fontWeight.2</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li mb={[4]}>400</Li>
          <Li mb={[4]}>600</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Example</P>
        <P fontWeight={[0]} mb={[4]}>Handgloves</P>
        <P fontWeight={[1]}>Handgloves</P>

      </Box>
  </React.Fragment>
);

export default FontWeight;
