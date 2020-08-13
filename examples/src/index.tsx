import * as React from "react";
import { useState } from "react";
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
  Indicator,
  StatelessCheckboxField,
  StatelessRadioButtonField,
  StatelessToggleSwitchField,
  StatelessTextInputField,
  ErrorLabel,
  Label,
  _light as light,
} from "ui";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [isChecked, toggleCheck] = useState(false);
  const [isSelected, toggleSelected] = useState(false);
  const [isSubmitting, toggleSubmitting] = useState(false);
  const [hasError, toggleHasError] = useState(false);
  const [textInputValue, updateTextInput] = useState("");

  return (
    <ThemeProvider theme={light}>
      <Reset />
      <Col pitch="3" p="3">
        <Inline>
          <Text>Default</Text>
          <Text mono>Monospace</Text>
          <Text bold>Bold</Text>
          <Text gray>Gray</Text>
          <Anchor href="http://google.com">Hi its a link</Anchor>
        </Inline>

        <Box>
          <StatelessTextInputField
            placeholder="Placeholder"
            value={textInputValue}
            onChange={(e) => updateTextInput(e.target.value)}
          >
            <Label mb="2">Toggle Switch</Label>
            <Label gray mb="2">
              Description
            </Label>
          </StatelessTextInputField>

          <StatelessTextInputField
            hasError
            placeholder="Placeholder"
            value={textInputValue}
            onChange={(e) => updateTextInput(e.target.value)}
          />
          <StatelessTextInputField
            disabled
            placeholder="Placeholder"
            value={textInputValue}
            onChange={(e) => updateTextInput(e.target.value)}
          />

          <StatelessToggleSwitchField
            selected={isSelected}
            p="2"
            onChange={() => toggleSelected(!isSelected)}
          >
            <Label>Toggle Switch</Label>
          </StatelessToggleSwitchField>

          <StatelessToggleSwitchField
            selected={isSelected}
            disabled
            p="2"
            onChange={() => toggleSelected(!isSelected)}
          >
            <Label>Toggle Switch</Label>
          </StatelessToggleSwitchField>

          <StatelessToggleSwitchField
            selected={isSelected}
            hasError
            p="2"
            onChange={() => toggleSelected(!isSelected)}
          >
            <Label mb="2">Toggle Switch</Label>
            <Label gray mb="2">
              Description
            </Label>
          </StatelessToggleSwitchField>
        </Box>

        <StatelessCheckboxField
          selected={isChecked}
          hasError={hasError}
          onChange={() => {
            toggleHasError(!hasError);
            toggleCheck(!isChecked);
          }}
        >
          <Label mb="2">Has Error</Label>
          <Label gray mb="2">
            Description
          </Label>
          <ErrorLabel hasError={hasError}>Error Message</ErrorLabel>
        </StatelessCheckboxField>

        <StatelessCheckboxField
          selected={isChecked}
          onChange={() => toggleCheck(!isChecked)}
        >
          <Label mb="1">Label</Label>
          <Label gray>Description</Label>
        </StatelessCheckboxField>

        <StatelessCheckboxField
          p="2"
          selected={isChecked}
          disabled
          onChange={() => toggleCheck(!isChecked)}
        >
          <Label>Label</Label>
        </StatelessCheckboxField>

        <StatelessRadioButtonField
          selected={isChecked}
          onChange={() => toggleCheck(!isChecked)}
        >
          <Label>Label</Label>
        </StatelessRadioButtonField>

        <Row pitch="3">
          <Indicator selected={true} hasError={false} disabled={false} />
          <Indicator selected={false} hasError={false} disabled={false} />
          <Indicator selected={false} hasError={true} disabled={false} />
          <Indicator selected={true} hasError={true} disabled={false} />
          <Indicator selected={false} hasError={true} disabled={true} />
          <Indicator selected={true} hasError={true} disabled={true} />
        </Row>

        <Row>
          <BaseButton onClick={() => console.log("Base Button")}>
            Base Button
          </BaseButton>
          <BaseAnchor href="www.google.com">BaseAnchor</BaseAnchor>
        </Row>

        <Row pitch="3">
          <Button primary onClick={() => console.log("Locked")}>
            <Icon mr="1" icon="Locked" />
            {isSubmitting ? "Submitting" : "Submit"}
          </Button>

          <Button onClick={() => console.log("Locked")}>
            <Icon mr="1" icon="Locked" />
            Locked
          </Button>

          <Button destructive onClick={() => console.log("Locked")}>
            <Icon mr="1" icon="Locked" />
            Locked
          </Button>

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

        <Row
          pitch={["2", "3", "4"]}
          p="2"
          border="1px solid"
          borderColor="blue"
        >
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
};

ReactDOM.render(<App />, document.getElementById("root"));
