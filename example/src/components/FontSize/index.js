import React from "react";
import {Box, Flex} from "indigo-react";

const FontSize = () => (
  <React.Fragment>
    <Flex mb={[5]}>
      <Box width={6/12}>Token</Box>
      <Box width={3/12}>Value</Box>
      <Box width={3/12}>Example</Box>
    </Flex>
      <Box fontFamily="mono">
        <Flex mb={[5]}>
          <Box width={6/12}>fontSize.1</Box>
          <Box width={3/12}>12px</Box>
          <Box width={3/12} fontSize="0" fontFamily="sans">Handgloves</Box>
        </Flex>
        <Flex mb={[5]}>
          <Box width={6/12}>fontSize.1</Box>
          <Box width={3/12}>14px</Box>
          <Box width={3/12} fontSize="1" fontFamily="sans">Handgloves</Box>
        </Flex>
        <Flex mb={[5]}>
          <Box width={6/12}>fontSize.2</Box>
          <Box width={3/12}>16px</Box>
          <Box width={3/12} ntSize="2" fontFamily="sans">Handgloves</Box>
        </Flex>
        <Flex mb={[5]}>
          <Box width={6/12}>fontSize.3</Box>
          <Box width={3/12}>20px</Box>
          <Box width={3/12} fontSize="3" fontFamily="sans">Handgloves</Box>
        </Flex>
        <Flex mb={[5]}>
          <Box width={6/12}>fontSize.4</Box>
          <Box width={3/12}>24px</Box>
          <Box width={3/12} fontSize="4" fontFamily="sans">Handgloves</Box>
        </Flex>
        <Flex mb={[5]}>
          <Box width={6/12}>fontSize.5</Box>
          <Box width={3/12}>32px</Box>
          <Box width={3/12} fontSize="5" fontFamily="sans">Handgloves</Box>
        </Flex>
        <Flex mb={[5]} alignItems="baseline">
          <Box width={6/12}>fontSize.5</Box>
          <Box width={3/12}>48px</Box>
          <Box width={3/12} fontSize="6" fontFamily="sans">Handgloves</Box>
        </Flex>
      </Box>
  </React.Fragment>
);

export default FontSize;
