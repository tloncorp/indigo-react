import React from "react";
import { StyledP, StyledDiv } from "indigo-react";

export default class DesignTokensPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledDiv p="50px" bg="#000">
          <StyledP color="#fff">Design Tokens</StyledP>
        </StyledDiv>
        <StyledDiv p="50px">
          <StyledP>This is how we use Design Tokens.</StyledP>
        </StyledDiv>
      </React.Fragment>
    );
  }
}
