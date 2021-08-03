import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import * as Yup from "yup";
import {
  Button,
  Reset,
  Row,
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
  Table,
  Tr,
  Td,
  IconIndex,
} from "./index";
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
      <div
        className="flex items-center h-8 px-2 border border-solid border-gray-100 rounded"
        key={(k + " " + v) as string}
        style={{ backgroundColor: v as string }}
      >
        <span className={k === "black" ? "text-white" : "text-black"}>{k}</span>
      </div>
    );
  });

type ThemeColorsProps = { theme: Theme };
const ThemeColors = ({ theme }: ThemeColorsProps) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 w-full">
    {enumerateColors(theme)}
  </div>
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
      <div className="flex flex-col p-6 font-sans text-sm">
        <Row p={p}>
          <span>{"Indigo Examples"}</span>
        </Row>
        <Row p={p}>
          <Row gapX="2">
            <span>Tools:</span>
            <a className="anchor" href="https://github.com/urbit/indigo-react">
              Github
            </a>
            <a
              className="anchor"
              href="https://www.figma.com/file/H1RAHV4KscSTnvrIiL0z8C/Indigo?node-id=1%3A6"
            >
              Figma
            </a>
            <a
              className="anchor"
              href="https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh"
            >
              Pesticide for Chrome
            </a>
          </Row>
        </Row>
        <Row p={p}>
          <Rule vertical className="mr-4" />
          <ThemeColors theme={theme} />
        </Row>
        <FourUp className="gap-6">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </FourUp>
        <Row p={p}>
          <div className="flex flex-col">
            <span className="h1">Heading 1</span>
            <span className="h2">Heading 2</span>
            <span className="h3">Heading 3</span>
            <span className="h4">Heading 4</span>
          </div>
        </Row>
        <Row>
          <div className="flex flex-col w-1/2">
            <span> </span>
          </div>
          <div className="flex flex-col w-1/2">
            <span> </span>
          </div>
        </Row>
        <TwoUp>
          <div className="flex flex-col p-6">
            <Rule />
            <span className="py-2">{"<Text />"}</span>

            <div className="flex flex-col space-y-2">
              <span>Default</span>
              <span className="max-w-[50px] truncate">
                asdfghjkl;qwertyuiop[zxcvbnm,.dsfgsdhsfhfg
              </span>
              <span className="font-mono">Monospace</span>
              <span className="font-bold">Bold</span>
              <span className="text-gray-500">Gray</span>
              <a className="anchor" href="http://urbit.org">
                http://www.urbit.org
              </a>
              <a className="anchor" target="_blank" href="http://urbit.org">
                Link to new Tab
              </a>
              <div>
                <span className="badge">Badge</span>
              </div>
            </div>
            <div>
              <p>
                <span>A </span>
                <span className="text-green-300">bunch </span>
                <span className="font-mono">of </span>
                <span className="font-bold">inlined </span>
                <span className="text-gray-500">
                  If we haven’t seen them before, we can optionally register
                  them for a new account. We then invalidate the token so it
                  can’t be used again (though it was going to expire after 15
                  minutes, anyways).
                </span>
                <a className="anchor" href="http://urbit.org">
                  elements
                </a>
                <span className="badge">Badge</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col p-6">
            <Rule />
            <span className="py-2">{"<Action />"}</span>
            <div>
              <span className="badge">Badge</span>
              <Action>Action</Action>
              <Action disabled>Disabled Action</Action>
              <Action destructive>Destructive Action</Action>
              <Action destructive disabled>
                Desctructive + Disabled Action
              </Action>
            </div>
          </div>
        </TwoUp>
        <Row>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<Ol />"}</span>
            <ol className="list-decimal">
              <li>
                <span>First</span>
              </li>
              <li>
                <span>Second</span>
              </li>
              <li>
                <span>Third</span>
              </li>
            </ol>
          </div>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<Ul />"}</span>
            <ul className="list-disc">
              <li>
                <span>Foo</span>
              </li>
              <li>
                <span>Bar</span>
              </li>
              <li>
                <span>Baz</span>
              </li>
            </ul>
          </div>
        </Row>
        <Row>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<Button />"}</span>
            <Button
              variant="primary"
              className="mb-2"
              children="Primary Button"
              onClick={() => console.log("Primary Button")}
            />
            <Button
              variant="primary"
              className="mb-2"
              onClick={() => console.log("Primary Button")}
            >
              {" "}
              Button With Icon
              <Icon icon="Smiley" className="ml-2" />
            </Button>
            <Button
              variant="destructive"
              className="mb-2"
              onClick={() => console.log("Destructive")}
            >
              Destructive Button With Icon
              <Icon icon="X" className="ml-2" />
            </Button>
            <Button
              variant="destructive-primary"
              className="mb-2"
              children="Destructive Primary Button"
              onClick={() => console.log("Primary Button (Destructive)")}
            />
            <Button
              variant="primary"
              disabled
              className="mb-2"
              children="Primary Button (Disabled)"
              onClick={() => console.log("Primary Button (Disabled)")}
            />
            <Button
              disabled
              className="mb-2"
              children="Primary Button"
              onClick={() => console.log("Disabled Button")}
            />

            <div className="space-y-2">
              <Button
                variant="primary"
                children="Primary Button"
                onClick={() => console.log("Primary Button")}
              />
              <Button
                variant="destructive"
                children="Destructive"
                onClick={() => console.log("Destructive")}
              />
              <Button
                variant="destructive-primary"
                children="Primary Button (Destructive)"
                onClick={() => console.log("Primary Button (Destructive)")}
              />
              <Button
                variant="primary"
                disabled
                children="Primary Button (Disabled)"
                onClick={() => console.log("Primary Button (Disabled)")}
              />
              <Button
                disabled
                children="Primary Button"
                onClick={() => console.log("Disabled Button")}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<Checkbox />"}</span>
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
              className="p-2"
              selected={statelessCheckboxSelected}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessCheckboxToggle(!statelessCheckboxSelected);
              }}
            >
              <label className="label">Checkbox Field label</label>
              <span className="label mt-1 text-gray-500">
                Note that the entire area of the field is a clickable area.
              </span>
              <ErrorLabel
                className="mt-2"
                hasError={checkboxErrorTriggerSelected}
              >
                Error Message
              </ErrorLabel>
            </StatelessCheckboxField>

            <StatelessCheckboxField
              className="p-2"
              selected={checkboxErrorTriggerSelected}
              hasError={false}
              onChange={() => {
                checkboxErrorTriggerSelectedToggle(
                  !checkboxErrorTriggerSelected
                );
              }}
            >
              <label className="label mb-2">Trigger Error Above</label>
            </StatelessCheckboxField>
          </div>
        </Row>

        <Row>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<RadioButton />"}</span>

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
              className="p-2"
              selected={statelessRadioButtonIndex === 0}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessRadioButtonSelect(0);
              }}
            >
              <label className="label">Radio Button Field label 1</label>
              <span className="label mt-1 text-gray-500">
                Note that the entire area of the field is a clickable area.
              </span>
              <ErrorLabel
                className="mt-2"
                hasError={checkboxErrorTriggerSelected}
              >
                Error Message
              </ErrorLabel>
            </StatelessRadioButtonField>

            <StatelessRadioButtonField
              name="radioGroup1"
              className="p-2"
              selected={statelessRadioButtonIndex === 1}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessRadioButtonSelect(1);
              }}
            >
              <label className="label">Radio Button Field label 2</label>
              <span className="label mt-1 text-gray-500">
                We are exclusive.
              </span>
              <ErrorLabel
                className="mt-2"
                hasError={checkboxErrorTriggerSelected}
              >
                Error Message
              </ErrorLabel>
            </StatelessRadioButtonField>
          </div>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<ToggleSwitch />"}</span>

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
              className="p-2"
              selected={statelessToggleSwitchSelected}
              hasError={checkboxErrorTriggerSelected}
              onChange={() => {
                statelessToggleSwitchToggle(!statelessToggleSwitchSelected);
              }}
            >
              <label className="label">Toggle Switch Field label</label>
              <span className="label mt-1 text-gray-500">
                Note that the entire area of the field is a clickable area.
              </span>
              <ErrorLabel
                className="mt-2"
                hasError={checkboxErrorTriggerSelected}
              >
                Error Message
              </ErrorLabel>
            </StatelessToggleSwitchField>
          </div>
        </Row>

        <Row>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<TextInput />"}</span>

            <div className="flex flex-col p-2">
              <label htmlFor="textinput" className="label">
                Text Input Field label
              </label>
              <span className="label mt-1 text-gray-500">
                Note that the entire area of the field is a clickable area.
              </span>
              <StatelessTextInput
                id="textinput"
                mt="2"
                value={statelessTextInputFieldValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  statelessTextInputFieldOnChange(inputTargetVal(e))
                }
                hasError={checkboxErrorTriggerSelected}
              ></StatelessTextInput>
              <ErrorLabel
                className="mt-2"
                hasError={checkboxErrorTriggerSelected}
              >
                Error Message
              </ErrorLabel>
            </div>
          </div>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<TextArea />"}</span>

            <div className="flex flex-col p-2">
              <label htmlFor="textarea" className="label">
                TextArea Field label
              </label>
              <span className="label mt-1 text-gray-500">
                Note that the entire area of the field is a clickable area.
              </span>
              <StatelessTextArea
                id="textarea"
                mt="2"
                rows={8}
                value={statelessTextAreaFieldValue}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  statelessTextAreaFieldOnChange(textAreaTargetVal(e))
                }
                hasError={checkboxErrorTriggerSelected}
              ></StatelessTextArea>
              <ErrorLabel
                className="mt-2"
                hasError={checkboxErrorTriggerSelected}
              >
                Error Message
              </ErrorLabel>
            </div>
          </div>
        </Row>

        <Row>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<ManagedForm />"}</span>

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
                <span className="p-4">My Managed Form</span>
                <ManagedTextInputField
                  className="p-4"
                  label="First Name"
                  id="firstName"
                  caption="Please enter your first name."
                  placeholder="Felicia"
                />
                <ManagedTextInputField
                  className="p-4"
                  id="firstName"
                  placeholder="Test"
                />
                <ManagedTextInputField
                  className="p-4"
                  label="Favorite Animal"
                  id="lastName"
                  caption="Everyone has a favorite animal..."
                  placeholder="Seal"
                />
                <ManagedCheckboxField
                  className="p-4"
                  label="I agree"
                  caption="Responsibility or liability for the frequency of provision and accuracy of the BBA LIBOR rate or any use made of the BBA LIBOR rate by the subscriber, whether or not arising from the negligence of any of BBAE or the Suppliers."
                  id="iagree"
                />
                <ManagedTextAreaField
                  className="p-4"
                  label="My Story..."
                  id="myStory"
                  caption="Everyone has a story to tell..."
                  placeholder="Back in my day"
                />
                <ManagedToggleSwitchField
                  className="p-4"
                  id="toggleSwitch"
                  label="Setting 1"
                  caption="Turning this on will turn the toggle switch on."
                />
                <fieldset className="m-4">
                  <legend className="mb-2">Favorite Color</legend>
                  <ManagedRadioButtonField
                    className="mb-2"
                    label="Green"
                    id="green"
                    name="color"
                    caption="Select if your favorite color is green."
                  />
                  <ManagedRadioButtonField
                    className="mb-2"
                    label="Blue"
                    id="blue"
                    name="color"
                    caption="Select if your favorite color is blue."
                  />
                  <ManagedRadioButtonField
                    className="mb-2"
                    id="dog"
                    name="color"
                    label="Dog"
                    caption="Dog is not a color"
                    disabled
                  />
                </fieldset>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </ManagedForm>
            </FormController>
          </div>

          <div className="flex flex-col w-1/2 p-6">
            {
              // TODO: Enumerate icons
            }
            <Rule />
            <span className="py-2">{"<Icon />"}</span>
            <Icon color="red" icon="ArrowEast" />
            <Icon icon="ArrowWest" />
            <Icon icon="ArrowNorth" />
            <Icon icon="ArrowSouth" />
            <Icon icon="ArrowExternal" />
            <Icon icon="Smiley" />
            <Icon icon="Upload" />
            <Icon icon="BootNode" />

            {(Object.keys(_iconIndex) as (keyof IconIndex)[]).map((icon) => {
              return (
                <Row>
                  <Icon icon={icon} className="mr-6" />
                  <span>{icon}</span>
                </Row>
              );
            })}

            <Icon
              icon="ArrowEast"
              className="h-16 w-16 text-blue-400 border border-solid border-blue-400"
            />
          </div>
        </Row>

        <Row>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">
              {"<DisclosureBox />, <DisclosureButton />"}
            </span>

            <DisclosureButton
              isOpen={disclosureBoxOpen}
              onClick={() => disclosureBoxToggle(!disclosureBoxOpen)}
            >
              <span>Extra Stuff</span>
            </DisclosureButton>
            <DisclosureBox isOpen={disclosureBoxOpen}>
              <span className="pl-2">Hello</span>
            </DisclosureBox>
          </div>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<Menu />, <MenuButton />"}</span>
            <div>
              <Menu>
                <MenuButton>
                  MenuButton
                  <Icon icon="ChevronSouth" className="ml-2" />
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
            </div>
          </div>
        </Row>

        <Row>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">
              {"<ContinuousProgressBar />, <SegmentedProgressBar />"}
            </span>

            <ContinuousProgressBar mb="2" percentage={10} />
            <ContinuousProgressBar mb="2" percentage={33} />
            <ContinuousProgressBar mb="2" percentage={50} />
            <ContinuousProgressBar mb="2" percentage={75} />
            <ContinuousProgressBar mb="2" percentage={100} />
            <ContinuousProgressBar mb="4" percentage={0} />

            <SegmentedProgressBar mb="2" segments={4} current={2} />
            <SegmentedProgressBar mb="2" segments={8} current={2} />
          </div>
          <div className="flex flex-col w-1/2 p-6">
            <Rule />
            <span className="py-2">{"<LoadingSpinner />, <MenuButton />"}</span>
            <div>
              <div className="p-2">
                <LoadingSpinner />
              </div>

              <Button>
                <LoadingSpinner />
              </Button>

              <div className="p-2 bg-black">
                <LoadingSpinner light />
              </div>

              <div className="p-2 bg-white">
                <LoadingSpinner dark />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="flex flex-col w-full p-6">
            <Rule />
            <span className="py-2">{"<Table />, <Tr />, <Td />"}</span>
            <Table>
              <Tr>
                <Td>
                  <span>Foo</span>
                </Td>
                <Td>
                  <span>Bar</span>
                </Td>
                <Td>
                  <span>Baz</span>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <span>Hoon</span>
                </Td>
                <Td>
                  <span>Zuse</span>
                </Td>
                <Td>
                  <span>Arvo</span>
                </Td>
              </Tr>
            </Table>
          </div>
        </Row>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
