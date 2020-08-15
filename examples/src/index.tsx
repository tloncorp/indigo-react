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
  StatelessTextAreaField,
  ManagedTextInputField,
  ErrorLabel,
  Label,
  Checkbox,
  RadioButton,
  ToggleSwitch,
  Rule,
  ManagedForm,
  ManagedCheckboxField,
  Form,
  _light as light,
  Theme,
} from "ui";
import { ThemeProvider } from "styled-components";

interface ManagedFormValues {
  firstName: string;
  lastName: string;
  isagree: boolean;
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
  // color: Yup.string()
  //   .oneOf(['blue', 'green']),
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
    if (k === "scales" || k === "util") return <div />;
    return (
      <Box
        key={(k + " " + v) as string}
        m="2"
        border="1"
        borderColor="washedGray"
        borderRadius="2"
        width="12.5%"
        height="5"
        p="2"
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

  const initialValues: ManagedFormValues = {
    firstName: "",
    lastName: "",
    iagree: false,
  };

  return (
    <ThemeProvider theme={light}>
      <Reset />
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
          <ThemeColors theme={light} />
        </Row>
        <Row>
          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<Text />"}</Text>
            <Text>Default</Text>
            <Text mono>Monospace</Text>
            <Text bold>Bold</Text>
            <Text gray>Gray</Text>
            <Anchor href="http://urbit.org">http://www.urbit.org</Anchor>
            <Anchor target="_blank" href="http://urbit.org">
              Link to new Tab
            </Anchor>

            <Inline>
              <Text>A </Text>
              <Text color="green">bunch </Text>
              <Text mono>of </Text>
              <Text bold>inlined </Text>
              <Text gray>text </Text>
              <Anchor href="http://urbit.org">elements</Anchor>
            </Inline>
          </Col>

          <Col p={p} width="50%">
            <Rule />
            <Text py="2">{"<Action />"}</Text>
            <Box>
              <Action>Action</Action>
              <Action disabled>Disabled Action</Action>
              <Action destructive>Destructive Action</Action>
              <Action destructive disabled>
                Desctructive + Disabled Action
              </Action>
            </Box>
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
              <Label gray mt="2">
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
              selected={defaultRadioButtonIsSelected}
              onClick={() =>
                defaultRadioButtonIsSelectedToggle(
                  !defaultRadioButtonIsSelected
                )
              }
            />
            <RadioButton
              mb="2"
              selected={errorRadioButtonIsSelected}
              hasError
              onClick={() =>
                errorRadioButtonIsSelectedToggle(!errorRadioButtonIsSelected)
              }
            />
            <RadioButton mb="2" selected={false} disabled />
            <RadioButton mb="2" selected={true} disabled />

            <StatelessRadioButtonField
              p="2"
              selected={statelessRadioButtonIndex === 0}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessRadioButtonSelect(0);
              }}
            >
              <Label>Radio Button Field Label 1</Label>
              <Label gray mt="2">
                Note that the entire area of the field is a clickable area.
              </Label>
              <ErrorLabel mt="2" hasError={checkboxErrorTriggerSelected}>
                Error Message
              </ErrorLabel>
            </StatelessRadioButtonField>

            <StatelessRadioButtonField
              p="2"
              selected={statelessRadioButtonIndex === 1}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessRadioButtonSelect(1);
              }}
            >
              <Label>Radio Button Field Label 2</Label>
              <Label gray mt="2">
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
              <Label gray mt="2">
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
              <Label gray mt="2">
                Note that the entire area of the field is a clickable area.
              </Label>
              <StatelessTextInputField
                mt="2"
                value={statelessTextInputFieldValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  statelessTextInputFieldOnChange(inputTargetVal(e))
                }
                hasError={checkboxErrorTriggerSelected}
              ></StatelessTextInputField>
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
              <Label gray mt="2">
                Note that the entire area of the field is a clickable area.
              </Label>
              <StatelessTextAreaField
                mt="2"
                rows={8}
                value={statelessTextAreaFieldValue}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  statelessTextAreaFieldOnChange(textAreaTargetVal(e))
                }
                hasError={checkboxErrorTriggerSelected}
              ></StatelessTextAreaField>
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
            <ManagedForm
              initialValues={initialValues}
              validationSchema={ManagedFormSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form display="flex" flexDirection="column">
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
                  label="Favorite Animal"
                  id="lastName"
                  caption="Everyone has a favorite animal..."
                  placeholder="Seal"
                />
                <ManagedCheckboxField
                  label="I agree"
                  caption="Responsibility or liability for the frequency of provision and accuracy of the BBA LIBOR rate or any use made of the BBA LIBOR rate by the subscriber, whether or not arising from the negligence of any of BBAE or the Suppliers."
                  id="iagree"
                />
              </Form>
            </ManagedForm>
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

            <Icon
              size={7}
              icon="ArrowEast"
              border="1px solid"
              borderColor="blue"
              color="blue"
            />
          </Col>
        </Row>
      </Col>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
