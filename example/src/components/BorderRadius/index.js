import React from "react";
import {Box, P, Ul, Li } from "indigo-react";

const BorderRadius = () => (
  <React.Fragment>
      <Box flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[8]}>radius.1</Li>

        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[8]}>4px</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Example</P>
        <Box border="0" bg="gray.4" p={[2]} mb={[4]} borderRadius="4px">No Border</Box>
      </Box>
  </React.Fragment>
);

export default BorderRadius;
