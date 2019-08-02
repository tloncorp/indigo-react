import React from "react";
import { StyledP, StyledDiv, StyledA, StyledUl, StyledLi } from "indigo-react";
import { Link } from "react-router-dom";

export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledDiv p={[8]} bg="black">
          <StyledP color="white">
            indigo-react is a React component library for Urbit's design
            language.
          </StyledP>
          <StyledP color="white" mt={[6]} maxWidth="38em" lineHeight="regular">
            This example site is built with our pritmitive components. We build
            the library with{" "}
            <StyledA href="https://styled-system.com" color="blue.2">
              styled-system
            </StyledA>{" "}
            and our{" "}
            <StyledA href="#" color="blue.2">
              design tokens
            </StyledA>
            .
          </StyledP>
        </StyledDiv>
        <StyledDiv p={[8]}>
          <StyledUl m="0" p="0">
            <StyledLi mb={[7]}>
              <StyledA as={Link} to="/design-tokens" color="blue.2">
                Design Tokens
              </StyledA>
            </StyledLi>
            <StyledLi mb={[7]}>
              <StyledA as={Link} to="/primitives" color="blue.2">
                Primitives
              </StyledA>
            </StyledLi>
          </StyledUl>
        </StyledDiv>
      </React.Fragment>
    );
  }
}
