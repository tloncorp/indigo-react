import React from "react";
import { StyledP, StyledH2 } from "indigo-react";

const Approach = () => (
  <React.Fragment>
    <StyledH2 mb={[3]}>Approach</StyledH2>
    <StyledP maxWidth="700px" mb={[4]}>
      The goal of indigo-react is to allow developers to build and prototype
      quickly using common components and our design tokens.
    </StyledP>

    <StyledP maxWidth="700px" mb={[4]}>
      Indigo-react is really a set of React component primitives. You can think
      of primitives as HTML elements with a larger, predefined surface area.
    </StyledP>
  </React.Fragment>
);

export default Approach;
