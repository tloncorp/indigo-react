import React from "react";
import {Div, P, Ul, Li, StyledA } from "indigo-react";

const FontFamily = () => (
  <React.Fragment>
      <Div flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li mb={[10]}>sans</Li>
          <Li mb={[4]}>mono</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li mb={[6]}>‘Inter’,-apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, 'Segoe UI', 'Helvetica Neue', sans-serif</Li>
          <Li>‘Source Code Pro’, monospace, sans-serif</Li>
        </Ul>
      </Div>
      <Div flex="30%">
        <P mb={[5]}>Example</P>
        <P fontFamily="sans" mb={[10]}>Handgloves</P>
        <P fontFamily="mono">Handgloves</P>

      </Div>
  </React.Fragment>
);

export default FontFamily;
