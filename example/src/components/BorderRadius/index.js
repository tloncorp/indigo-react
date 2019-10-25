import React from "react";
import {Box, Flex} from "indigo-react";

const BorderRadius = () => (
  <React.Fragment>
    <Flex mb={[5]}>
      <Box width={6/12}>Token</Box>
      <Box width={3/12}>Value</Box>
      <Box width={3/12}>Example</Box>
    </Flex>
    <Box fontFamily="mono">
      <Flex mb={[5]} alignItems="baseline" >
        <Box width={6/12}>borderRadius.0</Box>
        <Box width={3/12}>0</Box>
        <Box width={3/12} bg="grayLight" p={[2]} borderRadius="0" fontFamily="sans">No Border Radius
        </Box>
      </Flex>
      <Flex mb={[5]} alignItems="baseline" >
        <Box width={6/12}>borderRadius.1</Box>
        <Box width={3/12}>1</Box>
        <Box width={3/12} bg="grayLight" p={[2]} borderRadius="1" fontFamily="sans">Border Radius
        </Box>
      </Flex>
    </Box>
  </React.Fragment>
);

export default BorderRadius;
