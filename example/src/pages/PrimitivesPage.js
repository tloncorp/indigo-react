import React from "react";
import { StyledP, StyledDiv } from "indigo-react";

export default class PrimitivesPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledDiv p="50px" bg="#000">
          <StyledP color="#fff">Primitives</StyledP>
        </StyledDiv>
        <StyledDiv p="50px">
          <StyledP>This is how we use primitives.</StyledP>
        </StyledDiv>
      </React.Fragment>
    );
  }
}
