import React from "react";
import { StyledP, StyledDiv, StyledA, StyledUl, StyledLi } from "indigo-react";
import { Link } from "react-router-dom";

export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledDiv p="50px" bg="#000">
          <StyledP color="#fff">
            indigo-react is a React component library for Urbit's design
            language.
          </StyledP>
          <StyledP color="#fff" mt="40px" maxWidth="38em" lineHeight="22px">
            This example site is built with our pritmitive components. We build
            the library with{" "}
            <StyledA href="https://styled-system.com" color="#33cc77">
              styled-system
            </StyledA>{" "}
            and our{" "}
            <StyledA href="#" color="#33cc77">
              design tokens
            </StyledA>
            .
          </StyledP>
        </StyledDiv>
        <StyledDiv p="50px">
          <StyledUl m="0" p="0">
            <StyledLi mb="20px">
              <StyledA as={Link} to="/design-tokens" color="#33cc77">
                Design Tokens
              </StyledA>
            </StyledLi>
            <StyledLi mb="20px">
              <StyledA as={Link} to="/primitives" color="#33cc77">
                Primitives
              </StyledA>
            </StyledLi>
            <StyledLi mb="20px">
              <StyledA as={Link} to="/components" color="#33cc77">
                Writing your first components
              </StyledA>
            </StyledLi>
          </StyledUl>
        </StyledDiv>
      </React.Fragment>
    );
  }
}
