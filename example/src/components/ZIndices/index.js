import React from "react";
import {Box, P, Ul, Li } from "indigo-react";

const zIndices = () => (
  <React.Fragment>
      <Box flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[4]}>zIndices.0</Li>
          <Li height={[6]} mb={[4]}>zIndices.1</Li>
          <Li height={[6]} mb={[4]}>zIndices.2</Li>
          <Li height={[6]} mb={[4]}>zIndices.3</Li>
          <Li height={[6]} mb={[4]}>zIndices.4</Li>
          <Li height={[6]} mb={[4]}>zIndices.5</Li>
          <Li height={[6]} mb={[4]}>zIndices.6</Li>
          <Li height={[6]} mb={[4]}>zIndices.7</Li>
          <Li height={[6]} mb={[4]}>zIndices.8</Li>
          <Li height={[6]} mb={[4]}>zIndices.9</Li>
          <Li height={[6]} mb={[4]}>zIndices.10</Li>

        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[4]}>0</Li>
          <Li height={[6]} mb={[4]}>1</Li>
          <Li height={[6]} mb={[4]}>2</Li>
          <Li height={[6]} mb={[4]}>3</Li>
          <Li height={[6]} mb={[4]}>4</Li>
          <Li height={[6]} mb={[4]}>5</Li>
          <Li height={[6]} mb={[4]}>6</Li>
          <Li height={[6]} mb={[4]}>7</Li>
          <Li height={[6]} mb={[4]}>8</Li>
          <Li height={[6]} mb={[4]}>9</Li>
          <Li height={[6]} mb={[4]}>10</Li>
        </Ul>
      </Box>
  </React.Fragment>
);

export default zIndices;
