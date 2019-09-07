import React from "react";
import {Box, Flex, P} from "indigo-react";

const LineHeight = () => (
  <React.Fragment>
    <Flex mb={[5]}>
      <Box width={6/12}>Token</Box>
      <Box width={3/12}>Value</Box>
      <Box width={3/12}>Example</Box>
    </Flex>
      <Box fontFamily="mono">
        <Flex mb={[5]}>
          <Box width={6/12}>short</Box>
          <Box width={3/12}>1.333333</Box>
          <Box width={3/12}>
            <P fontFamily="sans" lineHeight="short">The quick brown fox jumps over the lazy dog</P>
          </Box>
        </Flex>
        <Flex mb={[5]}>
          <Box width={6/12}>regular</Box>
          <Box width={3/12}>1.5</Box>
          <Box width={3/12}>
            <P fontFamily="sans" lineHeight="regular">The quick brown fox jumps over the lazy dog</P>
          </Box>
        </Flex>
        <Flex mb={[5]}>
          <Box width={6/12}>tall</Box>
          <Box width={3/12}>1.6</Box>
          <Box width={3/12}>
            <P fontFamily="sans" lineHeight="tall">The quick brown fox jumps over the lazy dog</P>
          </Box>
        </Flex>
      </Box>
  </React.Fragment>
);

export default LineHeight;
