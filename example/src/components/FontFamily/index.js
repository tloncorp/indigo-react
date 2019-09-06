import React from "react";
import {Box, P, Ul, Li } from "indigo-react";

const FontFamily = () => (
  <React.Fragment>
      <Box flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li mb={[10]}>sans</Li>
          <Li mb={[4]}>mono</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li mb={[6]}>‘Inter’,-apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, 'Segoe UI', 'Helvetica Neue', sans-serif</Li>
          <Li>‘Source Code Pro’, monospace, sans-serif</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Example</P>
        <P fontFamily="sans" mb={[10]}>Handgloves</P>
        <P fontFamily="mono">Handgloves</P>

      </Box>
  </React.Fragment>
);

export default FontFamily;
