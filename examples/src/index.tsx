import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import * as Yup from "yup";
import {
  Box,
  Text,
  Button,
  Reset,
  Anchor,
  Row,
  Col,
  Paragraph,
  BaseButton,
  BaseAnchor,
  Action,
  Icon,
  Indicator,
  StatelessCheckboxField,
  StatelessRadioButtonField,
  StatelessToggleSwitchField,
  StatelessTextInput,
  StatelessTextArea,
  ManagedTextInputField,
  ManagedToggleSwitchField,
  ManagedTextAreaField,
  ErrorLabel,
  Label,
  Checkbox,
  RadioButton,
  ToggleSwitch,
  Rule,
  FormController,
  ManagedCheckboxField,
  ManagedRadioButtonField,
  ManagedForm,
  _light as light,
  _dark as dark,
  Theme,
  TwoUp,
  DisclosureBox,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ContinuousProgressBar,
  SegmentedProgressBar,
  LoadingSpinner,
  FourUp,
  _iconIndex,
  Badge,
  H1,
  H2,
  H3,
  H4,
  Li,
  Ol,
  Ul,
  Table,
  Tr,
  Td
} from "local-indigo-react";
import css, { SystemStyleObject } from "@styled-system/css";
import { ThemeProvider } from "styled-components";

interface ManagedFormValues {
  firstName: string;
  lastName: string;
  iagree: boolean;
  myStory: string;
  color: "blue" | "green";
  toggleSwitch: boolean;
}

const ManagedFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  iagree: Yup.boolean().test(
    "isTrue",
    "You must agree to the TOS before proceeding",
    (v) => !!v
  ),
  // about: Yup.string(),
  // middleName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  color: Yup.string().oneOf(["blue", "green"]),
  // urbitid: Yup.string()
  //   .test(
  //     'is-patp',
  //     'Not a valid Urbit ID',
  //     (value) => {
  //       if (value) return ob.isValidPatp(value)
  //       return
  //     })
  //   .required('An Urbit ID is Required'),
  // disabledfield: Yup.string(),
  // iagree: Yup.boolean().test('isTrue', 'You must agree to the TOS before proceeding', v => !!v)
});

const inputTargetVal = (event: React.FormEvent<HTMLInputElement>) => {
  const element = event.currentTarget as HTMLInputElement;
  return element.value;
};

const textAreaTargetVal = (event: React.FormEvent<HTMLTextAreaElement>) => {
  const element = event.currentTarget as HTMLTextAreaElement;
  return element.value;
};

const p = "4";

const enumerateColors = (theme: Theme) =>
  Object.entries(theme.colors).map(([k, v]) => {
    if (k === "scales" || k === "util") return null;
    return (
      <Box
        key={(k + " " + v) as string}
        m="2"
        border="1"
        borderColor="washedGray"
        borderRadius="2"
        width="12.5%"
        px="2"
        display="flex"
        alignItems="center"
        height="5"
        backgroundColor={v as string}
      >
        <Text color={k === "black" ? "white" : "black"}>{k}</Text>
      </Box>
    );
  });

type ThemeColorsProps = { theme: Theme };
const ThemeColors = ({ theme }: ThemeColorsProps) => (
  <Row flexWrap="wrap">{enumerateColors(theme)}</Row>
);

const App = () => {
  // Checkboxes
  const [defaultCheckboxIsSelected, defaultCheckboxIsSelectedToggle] = useState(
    true
  );
  const [errorCheckboxIsSelected, errorCheckboxIsSelectedToggle] = useState(
    false
  );
  const [statelessCheckboxSelected, statelessCheckboxToggle] = useState(false);
  const [
    checkboxErrorTriggerSelected,
    checkboxErrorTriggerSelectedToggle,
  ] = useState(false);

  // RadioButton
  const [
    defaultRadioButtonIsSelected,
    defaultRadioButtonIsSelectedToggle,
  ] = useState(true);
  const [
    errorRadioButtonIsSelected,
    errorRadioButtonIsSelectedToggle,
  ] = useState(false);
  const [statelessRadioButtonIndex, statelessRadioButtonSelect] = useState(0);

  // ToggleSwitch
  const [
    defaultToggleSwitchIsSelected,
    defaultToggleSwitchIsSelectedToggle,
  ] = useState(true);
  const [
    errorToggleSwitchIsSelected,
    errorToggleSwitchIsSelectedToggle,
  ] = useState(false);
  const [statelessToggleSwitchSelected, statelessToggleSwitchToggle] = useState(
    false
  );

  // TextInput
  const [
    statelessTextInputFieldValue,
    statelessTextInputFieldOnChange,
  ] = useState("");

  // TextArea
  const [
    statelessTextAreaFieldValue,
    statelessTextAreaFieldOnChange,
  ] = useState("");

  const [disclosureBoxOpen, disclosureBoxToggle] = useState(false);

  const initialValues: ManagedFormValues = {
    firstName: "",
    lastName: "",
    iagree: false,
    color: "blue",
    toggleSwitch: false,
    myStory: "",
  };

  const [theme, chooseTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      {
        // <Text>{JSON.stringify(css({color:'blue'})(theme))}</Text>
      }
      <Reset theme={theme} />
      <Col p={p}>
        <Row p={p}>
          <Text>{"Indigo Examples"}</Text>
        </Row>
        <Row p={p}>
          <Row pitch="2">
            <Text>Tools:</Text>
            <Anchor href="https://github.com/urbit/indigo-react">Github</Anchor>
            <Anchor href="https://www.figma.com/file/H1RAHV4KscSTnvrIiL0z8C/Indigo?node-id=1%3A6">
              Figma
            </Anchor>
            <Anchor href="https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh">
              Pesticide for Chrome
            </Anchor>
          </Row>
        </Row>
        <Row p={p}>
          <ThemeColors theme={theme} />
        </Row>
        <FourUp gap="4">
          <Text>0</Text>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </FourUp>
        <Row p={p}>
          <Col>
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
          </Col>
        </Row>
        <Row>
          <Col width={"50%"}>
            <Text> </Text>
          </Col>
          <Col width={"50%"}>
            <Text> </Text>
          </Col>
        </Row>
        <TwoUp>
          <Col p={p}>
            <Rule />
            <Text py="2">{"<Text />"}</Text>

            <Col>
              <Text>Default</Text>
              <Text
                overflow="hidden"
                whiteSpace="nowrap"
                maxWidth="50px"
                textOverflow="ellipsis"
              >
                asdfghjkl;qwertyuiop[zxcvbnm,.dsfgsdhsfhfg
              </Text>
              <Text mono>Monospace</Text>
              <Text bold>Bold</Text>
              <Text gray>Gray</Text>
              <Anchor href="http://urbit.org">http://www.urbit.org</Anchor>
              <Anchor target="_blank" href="http://urbit.org">
                Link to new Tab
              </Anchor>
              <div>
                <Badge>Badge</Badge>
              </div>
            </Col>
            <Box>
              <Paragraph>
                <Text>A </Text>
                <Text color="green">bunch </Text>
                <Text mono>of </Text>
                <Text bold>inlined </Text>
                <Text gray>
                  If we haven’t seen them before, we can optionally register
                  them for a new account. We then invalidate the token so it
                  can’t be used again (though it was going to expire after 15
                  minutes, anyways).
                </Text>
                <Anchor href="http://urbit.org">elements</Anchor>
                <Badge>Badge</Badge>
              </Paragraph>
            </Box>
          </Col>

          <Col p={p}>
            <Rule />
            <Text py="2">{"<Action />"}</Text>
            <Box>
              <Badge>Badge</Badge>
              <Action>Action</Action>
              <Action disabled>Disabled Action</Action>
              <Action destructive>Destructive Action</Action>
              <Action destructive disabled>
                Desctructive + Disabled Action
              </Action>
            </Box>
          </Col>
        </TwoUp>
        <Row>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<Ol />"}</Text>
            <Ol>
              <Li><Text>First</Text></Li>
              <Li><Text>Second</Text></Li>
              <Li><Text>Third</Text></Li>
            </Ol>
          </Col>
           <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<Ul />"}</Text>
            <Ul>
              <Li><Text>Foo</Text></Li>
              <Li><Text>Bar</Text></Li>
              <Li><Text>Baz</Text></Li>
            </Ul>
          </Col>
        </Row>
        <Row>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<Button />"}</Text>
            <Button
              primary
              mb="2"
              children="Primary Button"
              onClick={() => console.log("Primary Button")}
            />
            <Button
              primary
              mb="2"
              onClick={() => console.log("Primary Button")}
            >
              {" "}
              Button With Icon
              <Icon ml="2" icon="Smiley" />
            </Button>
            <Button
              destructive
              mb="2"
              onClick={() => console.log("Destructive")}
            >
              Destructive Button With Icon
              <Icon ml="2" icon="X" />
            </Button>
            <Button
              primary
              destructive
              mb="2"
              children="Destructive Primary Button"
              onClick={() => console.log("Primary Button (Destructive)")}
            />
            <Button
              primary
              disabled
              mb="2"
              children="Primary Button (Disabled)"
              onClick={() => console.log("Primary Button (Disabled)")}
            />
            <Button
              disabled
              mb="2"
              children="Primary Button"
              onClick={() => console.log("Disabled Button")}
            />

            <Box>
              <Button
                primary
                mb="2"
                children="Primary Button"
                onClick={() => console.log("Primary Button")}
              />
              <Button
                destructive
                mb="2"
                children="Destructive"
                onClick={() => console.log("Destructive")}
              />
              <Button
                primary
                destructive
                mb="2"
                children="Primary Button (Destructive)"
                onClick={() => console.log("Primary Button (Destructive)")}
              />
              <Button
                primary
                disabled
                mb="2"
                children="Primary Button (Disabled)"
                onClick={() => console.log("Primary Button (Disabled)")}
              />
              <Button
                disabled
                mb="2"
                children="Primary Button"
                onClick={() => console.log("Disabled Button")}
              />
            </Box>
          </Col>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<Checkbox />"}</Text>
            <Row mt="2" alignItems="flex-end">
              <Checkbox
                mb="2"
                selected={defaultCheckboxIsSelected}
                onClick={() =>
                  defaultCheckboxIsSelectedToggle(!defaultCheckboxIsSelected)
                }
              />
            </Row>
            <Checkbox
              mb="2"
              selected={defaultCheckboxIsSelected}
              onClick={() =>
                defaultCheckboxIsSelectedToggle(!defaultCheckboxIsSelected)
              }
            />
            <Checkbox
              mb="2"
              selected={errorCheckboxIsSelected}
              hasError
              onClick={() =>
                errorCheckboxIsSelectedToggle(!errorCheckboxIsSelected)
              }
            />
            <Checkbox mb="2" selected={false} disabled />
            <Checkbox mb="2" selected={true} disabled />

            <StatelessCheckboxField
              p="2"
              selected={statelessCheckboxSelected}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessCheckboxToggle(!statelessCheckboxSelected);
              }}
            >
              <Label>Checkbox Field Label</Label>
              <Label gray mt="1">
                Note that the entire area of the field is a clickable area.
              </Label>
              <ErrorLabel mt="2" hasError={checkboxErrorTriggerSelected}>
                Error Message
              </ErrorLabel>
            </StatelessCheckboxField>

            <StatelessCheckboxField
              p="2"
              selected={checkboxErrorTriggerSelected}
              hasError={false}
              onChange={() => {
                checkboxErrorTriggerSelectedToggle(
                  !checkboxErrorTriggerSelected
                );
              }}
            >
              <Label mb="2">Trigger Error Above</Label>
            </StatelessCheckboxField>
          </Col>
        </Row>

        <Row>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<RadioButton />"}</Text>

            <RadioButton
              mb="2"
              name="radioGroup1"
              selected={defaultRadioButtonIsSelected}
              onClick={() =>
                defaultRadioButtonIsSelectedToggle(
                  !defaultRadioButtonIsSelected
                )
              }
            />
            <RadioButton
              mb="2"
              name="radioGroup1"
              selected={errorRadioButtonIsSelected}
              hasError
              onClick={() =>
                errorRadioButtonIsSelectedToggle(!errorRadioButtonIsSelected)
              }
            />
            <RadioButton name="radioGroup1" mb="2" selected={false} disabled />
            <RadioButton name="radioGroup1" mb="2" selected={true} disabled />

            <StatelessRadioButtonField
              name="radioGroup1"
              p="2"
              selected={statelessRadioButtonIndex === 0}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessRadioButtonSelect(0);
              }}
            >
              <Label>Radio Button Field Label 1</Label>
              <Label gray mt="1">
                Note that the entire area of the field is a clickable area.
              </Label>
              <ErrorLabel mt="2" hasError={checkboxErrorTriggerSelected}>
                Error Message
              </ErrorLabel>
            </StatelessRadioButtonField>

            <StatelessRadioButtonField
              name="radioGroup1"
              p="2"
              selected={statelessRadioButtonIndex === 1}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessRadioButtonSelect(1);
              }}
            >
              <Label>Radio Button Field Label 2</Label>
              <Label gray mt="1">
                We are exclusive.
              </Label>
              <ErrorLabel mt="2" hasError={checkboxErrorTriggerSelected}>
                Error Message
              </ErrorLabel>
            </StatelessRadioButtonField>
          </Col>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<ToggleSwitch />"}</Text>

            <ToggleSwitch
              mb="2"
              selected={defaultToggleSwitchIsSelected}
              onClick={() =>
                defaultToggleSwitchIsSelectedToggle(
                  !defaultToggleSwitchIsSelected
                )
              }
            />
            <ToggleSwitch
              mb="2"
              selected={errorToggleSwitchIsSelected}
              hasError
              onClick={() =>
                errorToggleSwitchIsSelectedToggle(!errorToggleSwitchIsSelected)
              }
            />
            <ToggleSwitch mb="2" selected={false} disabled />
            <ToggleSwitch mb="2" selected={true} disabled />
            <StatelessToggleSwitchField
              p="2"
              selected={statelessToggleSwitchSelected}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessToggleSwitchToggle(!statelessToggleSwitchSelected);
              }}
            >
              <Label>Toggle Switch Field Label</Label>
              <Label gray mt="1">
                Note that the entire area of the field is a clickable area.
              </Label>
              <ErrorLabel mt="2" hasError={checkboxErrorTriggerSelected}>
                Error Message
              </ErrorLabel>
            </StatelessToggleSwitchField>
          </Col>
        </Row>

        <Row>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<TextInput />"}</Text>

            <Col p="2">
              <Label>Toggle Switch Field Label</Label>
              <Label gray mt="1">
                Note that the entire area of the field is a clickable area.
              </Label>
              <StatelessTextInput
                mt="2"
                value={statelessTextInputFieldValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  statelessTextInputFieldOnChange(inputTargetVal(e))
                }
                hasError={checkboxErrorTriggerSelected}
              ></StatelessTextInput>
              <ErrorLabel mt="2" hasError={checkboxErrorTriggerSelected}>
                Error Message
              </ErrorLabel>
            </Col>
          </Col>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<TextArea />"}</Text>

            <Col p="2">
              <Label>Toggle Switch Field Label</Label>
              <Label gray mt="1">
                Note that the entire area of the field is a clickable area.
              </Label>
              <StatelessTextArea
                mt="2"
                rows={8}
                value={statelessTextAreaFieldValue}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  statelessTextAreaFieldOnChange(textAreaTargetVal(e))
                }
                hasError={checkboxErrorTriggerSelected}
              ></StatelessTextArea>
              <ErrorLabel mt="2" hasError={checkboxErrorTriggerSelected}>
                Error Message
              </ErrorLabel>
            </Col>
          </Col>
        </Row>

        <Row>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<ManagedForm />"}</Text>

            <FormController
              initialValues={initialValues}
              validationSchema={ManagedFormSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <ManagedForm display="flex" flexDirection="column">
                <ManagedToggleSwitchField
                  p="3"
                  id="toggleSwitch"
                  label="Setting 1"
                  caption="Turning this on will turn the toggle switch on."
                />
                <Text p="3">My Managed Form</Text>
                <ManagedTextInputField
                  p="3"
                  label="First Name"
                  id="firstName"
                  caption="Please enter your first name."
                  placeholder="Felicia"
                />
                <ManagedTextInputField
                  p="3"
                  id="firstName"
                  placeholder="Test"
                />
                <ManagedTextInputField
                  p="3"
                  label="Favorite Animal"
                  id="lastName"
                  caption="Everyone has a favorite animal..."
                  placeholder="Seal"
                />
                <ManagedCheckboxField
                  p="3"
                  label="I agree"
                  caption="Responsibility or liability for the frequency of provision and accuracy of the BBA LIBOR rate or any use made of the BBA LIBOR rate by the subscriber, whether or not arising from the negligence of any of BBAE or the Suppliers."
                  id="iagree"
                />
                <ManagedTextAreaField
                  p="3"
                  label="My Story..."
                  id="myStory"
                  caption="Everyone has a story to tell..."
                  placeholder="Back in my day"
                />
                <ManagedToggleSwitchField
                  p="3"
                  id="toggleSwitch"
                  label="Setting 1"
                  caption="Turning this on will turn the toggle switch on."
                />
                <Box>
                  <Label mb="2">Favorite Color</Label>
                  <ManagedRadioButtonField
                    mb="2"
                    label="Green"
                    id="green"
                    name="color"
                    caption="Select if your favorite color is green."
                  />
                  <ManagedRadioButtonField
                    mb="2"
                    label="Blue"
                    id="blue"
                    name="color"
                    caption="Select if your favorite color is blue."
                  />
                  <ManagedRadioButtonField
                    mb="2"
                    id="dog"
                    name="color"
                    label="Dog"
                    caption="Dog is not a color"
                    disabled
                  />
                </Box>
                <Button primary type="submit">
                  Submit
                </Button>
              </ManagedForm>
            </FormController>
          </Col>

          <Col p={p} width="50%">
            {
              // TODO: Enumerate icons
            }
            <Rule />
            <Text py="2">{"<Icon />"}</Text>
            <Icon color="red" icon="ArrowEast" />
            <Icon icon="ArrowWest" />
            <Icon icon="ArrowNorth" />
            <Icon icon="ArrowSouth" />
            <Icon icon="ArrowExternal" />
            <Icon icon="Smiley" />
            <Icon icon="Upload" />
            <Icon icon="Boot" />

            {Object.keys(_iconIndex).map((icon) => {
              return (
                <Row>
                  <Icon icon={icon} mr="4" />
                  <Text>{icon}</Text>
                </Row>
              );
            })}

            <Icon
              size={7}
              icon="ArrowEast"
              border="1px solid"
              borderColor="blue"
              color="blue"
            />
          </Col>
        </Row>

        <Row>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<DisclosureBox />, <DisclosureButton />"}</Text>

            <DisclosureButton
              isOpen={disclosureBoxOpen}
              onClick={() => disclosureBoxToggle(!disclosureBoxOpen)}
            >
              <Text>Extra Stuff</Text>
            </DisclosureButton>
            <DisclosureBox isOpen={disclosureBoxOpen}>
              <Text pl="2">Hello</Text>
            </DisclosureBox>
          </Col>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<Menu />, <MenuButton />"}</Text>
            <Box>
              <Menu>
                <MenuButton width="100%" justifyContent="space-between">
                  MenuButton
                  <Icon ml="2" icon="ChevronSouth" />
                </MenuButton>
                <MenuList>
                  <MenuItem onSelect={() => console.log("Command 1")}>
                    Command 1
                  </MenuItem>
                  <MenuItem onSelect={() => console.log("Command 2")}>
                    Command 2
                  </MenuItem>
                  <MenuItem onSelect={() => console.log("Command 3")}>
                    Command 3
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Col>
        </Row>

        <Row>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">
              {"<ContinuousProgressBar />, <SegmentedProgressBar />"}
            </Text>

            <ContinuousProgressBar mb="2" percentage={10} />
            <ContinuousProgressBar mb="2" percentage={33} />
            <ContinuousProgressBar mb="2" percentage={50} />
            <ContinuousProgressBar mb="2" percentage={75} />
            <ContinuousProgressBar mb="2" percentage={100} />
            <ContinuousProgressBar mb="4" percentage={0} />

            <SegmentedProgressBar mb="2" segments={4} current={2} />
            <SegmentedProgressBar mb="2" segments={8} current={2} />
          </Col>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<LoadingSpinner />, <MenuButton />"}</Text>
            <Box>
              <Box p="2">
                <LoadingSpinner />
              </Box>

              <Button>
                <LoadingSpinner />
              </Button>

              <Box p="2" backgroundColor="black">
                <LoadingSpinner light />
              </Box>

              <Box p="2" backgroundColor="white">
                <LoadingSpinner dark />
              </Box>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col p={p} width="100%">
            <Rule />
            <Text py="2">
              {"<Table />, <Tr />, <Td />"}
            </Text>
            <Table>
              <Tr>
                <Td><Text>Foo</Text></Td>
                <Td><Text>Bar</Text></Td>
                <Td><Text>Baz</Text></Td>
              </Tr>
              <Tr>
                <Td><Text>Hoon</Text></Td>
                <Td><Text>Zuse</Text></Td>
                <Td><Text>Arvo</Text></Td>
              </Tr>
            </Table>
          </Col>
        </Row>

      </Col>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
