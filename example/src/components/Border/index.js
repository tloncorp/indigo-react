import React from "react";
import {Box, Flex} from "indigo-react";

const Border = () => (
  <React.Fragment>
  <Flex mb={[5]}>
    <Box width={6/12}>Token</Box>
    <Box width={3/12}>Value</Box>
    <Box width={3/12}>Example</Box>
  </Flex>
    <Box fontFamily="mono">
      <Flex mb={[5]} alignItems="baseline">
        <Box width={6/12}>border.0</Box>
        <Box width={3/12}>none</Box>
        <Box width={3/12} bg="gray.4" p={[2]} border="0" fontFamily="sans">No Border</Box>
      </Flex>
      <Flex mb={[5]} alignItems="baseline">
        <Box width={6/12}>border.1</Box>
        <Box width={3/12}>1px solid</Box>
        <Box width={3/12} bg="gray.4" p={[2]} border="1" fontFamily="sans">Border</Box>
      </Flex>
    </Box>
  </React.Fragment>
);

export default Border;
