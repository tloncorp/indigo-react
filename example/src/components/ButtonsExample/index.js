import React from "react";
import { Box, Button, Span, Loading, Flex, P } from "indigo-react";
import CodeBlock from "../CodeBlock";

const downloadExample = `<Button width={6 / 12} onClick={() => console.log("Downloading...")}>
  <Span>Download Passport</Span>
  <Span>↓</Span>
</Button>`;

const loadingExample = `<Button onClick={() => console.log("Downloading...")} isLoading={true}>
  <Span>Loading...</Span>
  <Loading />
</Button>`;

const disabledExample = `<Button onClick={() => console.log("Downloading...")} disabled>
  <Span>Go</Span>
  <Span>→</Span>
</Button>`;

const errorExample = `<Button onClick={() => console.log("Downloading...")} error>
  <Span>Error</Span>
  <span role="img" aria-label="Error">⚠️</span>
</Button>`;

const ButtonsExample = () => (
  <React.Fragment>
    <Box mt={8} mb={10}>
      <Flex mb={8} alignItems="flex-start" flexDirection={["column", "row"]}>
        <Flex
          width={[1, 1 / 2, 1 / 3]}
          flexDirection="column"
          justifyContent="center"
          pt={4}
        >
          <P mb={2}>Left Button</P>
          <Button
            width={[1, 4 / 5, 4 / 5]}
            onClick={() => console.log("Downloading...")}
          >
            <Span>Download Passport</Span>
            <Span>↓</Span>
          </Button>
        </Flex>
        <Box width={[1, 1 / 2, 2 / 3]}>
          <CodeBlock codeExample={downloadExample} />
        </Box>
      </Flex>

      <Flex mb={8} alignItems="flex-start" flexDirection={["column", "row"]}>
        <Flex
          width={[1, 1 / 2, 1 / 3]}
          flexDirection="column"
          justifyContent="center"
          pt={4}
        >
          <P mb={2}>Left Button – Loading</P>
          <Button
            width={[1, 4 / 5, 4 / 5]}
            onClick={() => console.log("Downloading...")}
            isLoading={true}
          >
            <Span>Loading...</Span>
            <Loading />
          </Button>
        </Flex>
        <Box width={[1, 1 / 2, 2 / 3]}>
          <CodeBlock codeExample={loadingExample} />
        </Box>
      </Flex>

      <Flex mb={8} alignItems="flex-start" flexDirection={["column", "row"]}>
        <Flex
          width={[1, 1 / 2, 1 / 3]}
          flexDirection="column"
          justifyContent="center"
          pt={4}
        >
          <P mb={2}>Left Button – Disabled</P>
          <Button
            width={[1, 4 / 5, 4 / 5]}
            onClick={() => console.log("Downloading...")}
            disabled
          >
            <Span>Go</Span>
            <Span>→</Span>
          </Button>
        </Flex>
        <Box width={[1, 1 / 2, 2 / 3]}>
          <CodeBlock codeExample={disabledExample} />
        </Box>
      </Flex>

      <Flex mb={8} alignItems="flex-start" flexDirection={["column", "row"]}>
        <Flex
          width={[1, 1 / 2, 1 / 3]}
          flexDirection="column"
          justifyContent="center"
          pt={4}
        >
          <P mb={2}>Left Button – Error </P>
          <Button
            width={[1, 4 / 5, 4 / 5]}
            onClick={() => console.log("Downloading...")}
            error
          >
            <Span>Error</Span>
            <span role="img" aria-label="Error">
              ⚠️
            </span>
          </Button>
        </Flex>
        <Box width={[1, 1 / 2, 2 / 3]}>
          <CodeBlock codeExample={errorExample} />
        </Box>
      </Flex>
    </Box>
  </React.Fragment>
);

export default ButtonsExample;
