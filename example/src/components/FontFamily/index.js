import React from "react";
import {Box, Flex } from "indigo-react";

const FontFamily = () => (
  <React.Fragment>
    <Flex mb={[5]}>
      <Box width={6/12}>Token</Box>
      <Box width={3/12}>Value</Box>
      <Box width={3/12}>Example</Box>
    </Flex>
      <Box fontFamily="mono">
        <Flex mb={[5]}>
          <Box width={6/12}>sans</Box>
          <Box width={3/12} fontSize="1">'Inter',-apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, 'Segoe UI', 'Helvetica Neue', sans-serif</Box>
          <Box width={3/12} fontSize="3" fontFamily="sans">Handgloves</Box>
        </Flex>
        <Flex mb={[5]}>
          <Box width={6/12}>mono</Box>
          <Box width={3/12} fontSize="1">'Source Code Pro', monospace, Arial</Box>
          <Box width={3/12} fontSize="3" fontFamily="mono">Handgloves</Box>
        </Flex>
      </Box>
  </React.Fragment>
);

export default FontFamily;
