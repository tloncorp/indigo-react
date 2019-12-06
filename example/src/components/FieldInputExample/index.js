import React from "react";
import { Box, Button, Span, Loading, Flex, P, FieldInput } from "indigo-react";
import CodeBlock from "../CodeBlock";

const standardExample = `<Span fontSize={1} as="label" htmlFor="standard">Label</Span>
<Box>
  <FieldInput as="textarea" name="standard" placeholder="blue kitten freedom open laser child towel garden" />
</Box>`;

const disabledExample = `<Span fontSize={1} as="label" htmlFor="standard">Label</Span>
<Box>
  <FieldInput disabled as="textarea" name="standard" placeholder="blue kitten freedom open laser child towel garden" />
</Box>`;

const FieldInputExample = () => (
  <React.Fragment>
    <Box mt={8} mb={10}>
      <Flex mb={8} alignItems="flex-start" flexDirection={["column", "row"]}>
        <Flex
          width={[1, 1 / 2, 1 / 3]}
          flexDirection="column"
          justifyContent="center"
          pt={1}
        >
          <P mb={2}>Textarea</P>
          <Span fontSize={1} as="label" htmlFor="standard">
            Label
          </Span>
          <Box width={[1, 4 / 5, 4 / 5]}>
            <FieldInput
              as="textarea"
              name="standard"
              placeholder="blue kitten freedom open laser child towel garden"
            />
          </Box>
        </Flex>
        <Box width={[1, 1 / 2, 2 / 3]}>
          <CodeBlock codeExample={standardExample} />
        </Box>
      </Flex>

      <Flex mb={8} alignItems="flex-start" flexDirection={["column", "row"]}>
        <Flex
          width={[1, 1 / 2, 1 / 3]}
          flexDirection="column"
          justifyContent="center"
          pt={1}
        >
          <P mb={2}>Textarea – Disabled</P>
          <Span fontSize={1} as="label" htmlFor="standard">
            Label
          </Span>
          <Box width={[1, 4 / 5, 4 / 5]}>
            <FieldInput
              as="textarea"
              name="standard"
              placeholder="blue kitten freedom open laser child towel garden"
              disabled
            />
          </Box>
        </Flex>
        <Box width={[1, 1 / 2, 2 / 3]}>
          <CodeBlock codeExample={disabledExample} />
        </Box>
      </Flex>
    </Box>
  </React.Fragment>
);

export default FieldInputExample;
