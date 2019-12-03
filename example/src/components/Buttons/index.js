import React from "react";
import { Box, Button, Span, Loading } from "indigo-react";

const Buttons = () => (
  <React.Fragment>
    <Box mb="10">
      <Button
        width={6 / 12}
        my="4"
        onClick={() => console.log("Downloading...")}
      >
        <Span>Download Passport</Span>
        <Span>↓</Span>
      </Button>

      <Box mb="4">
        <Button onClick={() => console.log("Downloading...")} isLoading={true}>
          <Span>Loading...</Span>
          <Loading />
        </Button>
      </Box>

      <Box mb="4">
        <Button onClick={() => console.log("Downloading...")} disabled>
          <Span>Go</Span>
          <Span>→</Span>
        </Button>
      </Box>
      <Box mb="4">
        <Button onClick={() => console.log("Downloading...")} error>
          <Span>Error</Span>
          <span role="img" aria-label="Error">
            ⚠️
          </span>
        </Button>
      </Box>
    </Box>
  </React.Fragment>
);

export default Buttons;
