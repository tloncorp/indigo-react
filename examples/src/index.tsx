import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Box,
  Text,
  Button,
  Reset,
  Anchor,
  Row,
  Col,
  Inline,
  BaseButton,
  BaseAnchor,
  Action,
  Icon,
  UncontrolledCheckbox,
  light,
} from "ui";
import { ThemeProvider } from "styled-components";

const App = () => (
  <ThemeProvider theme={light}>
    <Reset />
    <Col pitch="3" p="3">
      <Text>Default</Text>
      <Text mono>Monospace</Text>
      <Text bold>Bold</Text>
      <Text gray>Gray</Text>

      <UncontrolledCheckbox />

      <Row>
        <BaseButton onClick={() => console.log("Base Button")}>
          Base Button
        </BaseButton>
        <BaseAnchor href="www.google.com">BaseAnchor</BaseAnchor>
      </Row>

      <Row>
        <Button onClick={() => console.log("Locked")}>
          <Icon mr="1" icon="Locked" />
          Locked
        </Button>
      </Row>

      <Row p="3" border="1px solid" borderColor="blue">
        <Text color="blue">Row: Collapsed</Text>
      </Row>

      <Row p="3" border="1px solid" borderColor="blue">
        <Text color="blue">Default Row</Text>
      </Row>

      <Row pitch={["2", "3", "4"]} p="2" border="1px solid" borderColor="red">
        <Text height="3" border="1px solid" borderColor="red">
          Row Pitch
        </Text>
        <Text height="3" border="1px solid" borderColor="red">
          1
        </Text>
        <Text height="3" border="1px solid" borderColor="red" ml="0" mr="0">
          2
        </Text>
        <Text height="3" border="1px solid" borderColor="red">
          3
        </Text>
      </Row>

      <Row
        pitch="2"
        p="2"
        border="1px solid"
        borderColor="lightGray"
        borderRadius="2"
      >
        <Action>Action 1</Action>
        <Action>Action 2</Action>
        <Action disabled>Action 3</Action>
        <Action destructive>Action 3</Action>
        <Action destructive disabled>
          Action 3
        </Action>
      </Row>

      <Button
        primary
        width="500px"
        children="Primary Button"
        onClick={() => console.log("Primary Button")}
      />

      <Button
        primary
        disabled
        width="500px"
        children="Primary Button (Disabled)"
        onClick={() => console.log("Primary Button (Disabled)")}
      />

      <Button
        disabled
        width={["500px"]}
        children="Primary Button"
        onClick={() => console.log("Disabled Button")}
      />

      <Button height="7" width="500px">
        Button
      </Button>

      <Row>
        <Button>Button</Button>
      </Row>

      <Inline>
        <Text>Hi here is an </Text>
        <Anchor>Anchor</Anchor>
        <Text> tag.</Text>
      </Inline>

      <Col height="8" border="1px solid" borderColor="blue" p="2">
        <Text color="blue">Col</Text>
      </Col>

      <Col height="8">
        <Row
          border="1px solid"
          borderColor="blue"
          width={["15%", "33%", "100%"]}
        >
          <Text>Responsive Row</Text>
        </Row>
      </Col>

      <Row pitch="1" p="1">
        <Icon color="red" icon="ArrowEast" />
        <Icon icon="ArrowWest" />
        <Icon icon="ArrowNorth" />
        <Icon icon="ArrowSouth" />
        <Icon pr="4" icon="ArrowExternal" />
        <Icon
          size={7}
          icon="ArrowEast"
          border="1px solid"
          borderColor="blue"
          color="blue"
        />
      </Row>
    </Col>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
