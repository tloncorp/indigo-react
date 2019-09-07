import React from "react";
import {Box, Flex} from "indigo-react";

const FontWeight = () => (
  <React.Fragment>
  <Flex mb={[5]}>
    <Box width={6/12}>Token</Box>
    <Box width={3/12}>Value</Box>
    <Box width={3/12}>Example</Box>
  </Flex>
    <Box fontFamily="mono">
      <Flex mb={[5]} alignItems="baseline">
        <Box width={6/12}>regular</Box>
        <Box width={3/12}>400</Box>
        <Box width={3/12} fontSize="3" fontFamily="sans" fontWeight="regular">Handgloves</Box>
      </Flex>
      <Flex mb={[5]} alignItems="baseline">
        <Box width={6/12}>bold</Box>
        <Box width={3/12}>600</Box>
        <Box width={3/12} fontSize="3" fontFamily="sans" fontWeight="bold">Handgloves</Box>
      </Flex>
    </Box>
  </React.Fragment>
);

export default FontWeight;
