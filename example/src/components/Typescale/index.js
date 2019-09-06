import React from "react";
import { H2, Box, P, StyledA } from "indigo-react";

const Typescale = () => (
  <React.Fragment>
    <H2 mb={[5]}>Typescale</H2>
    <P mb={8}>
      Typescale is based on powers of 2. To read more about why we use powers of
      2, check out this{" "}
      <StyledA href="https://styled-system.com/guides/why-powers-of-two">
        link
      </StyledA>
      .
    </P>
    <Box maxWidth="800px" m border="1px solid black">
      <H2 mb={[3]} fontSize={[0]}>
        ~zod is your neighbor
      </H2>
      <H2 mb={[3]} fontSize={[1]}>
        ~zod is your neighbor
      </H2>
      <H2 mb={[3]} fontSize={[2]}>
        ~zod is your neighbor
      </H2>
      <H2 mb={[3]} fontSize={[3]}>
        ~zod is your neighbor
      </H2>
      <H2 mb={[3]} fontSize={[4]}>
        ~zod is your neighbor
      </H2>
      <H2 mb={[3]} fontSize={[5]}>
        ~zod is your neighbor
      </H2>
      <H2 mb={[3]} fontSize={[6]}>
        ~zod is your neighbor
      </H2>
      <H2 mb={[3]} fontSize={[7]}>
        ~zod is your neighbor
      </H2>
      <H2 mb={[3]} fontSize={[8]}>
        ~zod is your neighbor
      </H2>
    </Box>
  </React.Fragment>
);

export default Typescale;
