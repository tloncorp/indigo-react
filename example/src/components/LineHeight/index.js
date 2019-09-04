import React from "react";
import {Div, P, Ul, Li } from "indigo-react";

const LineHeight = () => (
  <React.Fragment>
      <Div flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li mb={[8]}>short</Li>
          <Li mb={[8]}>regular</Li>
          <Li mb={[7]}>tall</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
        <Li mb={[8]}>1.333333</Li>
        <Li mb={[8]}>1.5</Li>
        <Li mb={[7]}>1.6</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Example</P>
        <P width={[12]} lineHeight="short" mb={[7]}>The quick brown fox jumps over the lazy dog</P>
        <P width={[12]} lineHeight="regular" mb={[6]}>The quick brown fox jumps over the lazy dog</P>
        <P width={[12]} lineHeight="tall" mb={[5]}>The quick brown fox jumps over the lazy dog</P>

      </Div>
  </React.Fragment>
);

export default LineHeight;
