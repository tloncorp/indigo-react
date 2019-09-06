import React from "react";
import {Box, P, Ul, Li } from "indigo-react";

const Border = () => (
  <React.Fragment>
      <Box flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[8]}>border.0</Li>
          <Li height={[6]} mb={[4]}>border.1</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[8]}>0</Li>
          <Li height={[6]} mb={[4]}>1px solid</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Example</P>
        <Box border="0" bg="gray.4" p={[2]} mb={[4]}>No Border</Box>
        <Box border="1px solid" bg="gray.4" p={[2]}>Border</Box>
      </Box>
  </React.Fragment>
);

export default Border;
