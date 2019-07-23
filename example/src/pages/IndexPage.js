import React from "react";
import { StyledP, StyledDiv, StyledA, StyledUl, StyledLi } from "indigo-react";
import { Link } from "react-router-dom";

export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledDiv p="50px" bg="black">
          <StyledP color="#fff">
            indigo-react is a React component library for Urbit's design
            language.
          </StyledP>
          <StyledP color="#fff" mt="40px" maxWidth="38em" lineHeight="22px">
            This example site is built with our pritmitive components. We build
            the library with{" "}
            <StyledA href="https://styled-system.com" color="green">
              styled-system
            </StyledA>{" "}
            and our{" "}
            <StyledA href="#" color="green">
              design tokens
            </StyledA>
            .
          </StyledP>
        </StyledDiv>
        <StyledDiv p="50px">
          <StyledUl m="0" p="0">
            <StyledLi mb="20px">
              <StyledA as={Link} to="/design-tokens" color="green">
                Design Tokens
              </StyledA>
            </StyledLi>
            <StyledLi mb="20px">
              <StyledA as={Link} to="/primitives" color="green">
                Primitives
              </StyledA>
            </StyledLi>
            <StyledLi mb="20px">
              <StyledA as={Link} to="/components" color="green">
                Writing your first components
              </StyledA>
            </StyledLi>
          </StyledUl>
        </StyledDiv>
      </React.Fragment>
    );
  }
}
