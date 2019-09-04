import React from "react";
import {Div, P, Ul, Li } from "indigo-react";

const FontSize = () => (
  <React.Fragment>
      <Div flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[4]}>fontSize.1</Li>
          <Li height={[6]} mb={[4]}>fontSize.2</Li>
          <Li height={[6]} mb={[4]}>fontSize.3</Li>
          <Li height={[6]} mb={[4]}>fontSize.4</Li>
          <Li height={[6]} mb={[8]}>fontSize.5</Li>
          <Li height={[6]} mb={[8]}>fontSize.6</Li>
          <Li height={[6]} mb={[7]}>fontSize.7</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[4]}>12px</Li>
          <Li height={[6]} mb={[4]}>14px</Li>
          <Li height={[6]} mb={[4]}>16px</Li>
          <Li height={[6]} mb={[4]}>20px</Li>
          <Li height={[6]} mb={[8]}>24px</Li>
          <Li height={[6]} mb={[8]}>32px</Li>
          <Li height={[6]} mb={[7]}>48px</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Example</P>
        <P fontSize={[1]} mb={[4]}>Handgloves</P>
        <P fontSize={[2]} mb={[4]}>Handgloves</P>
        <P fontSize={[3]} mb={[4]}>Handgloves</P>
        <P fontSize={[4]} mb={[2]}>Handgloves</P>
        <P fontSize={[5]} mb={[5]}>Handgloves</P>
        <P fontSize={[6]} mb={[5]}>Handgloves</P>
        <P fontSize={[7]} mb={[0]}>Handgloves</P>
      </Div>
  </React.Fragment>
);

export default FontSize;
