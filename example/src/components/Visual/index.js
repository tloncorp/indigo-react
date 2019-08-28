import React from "react";
import {
  Div,
  H2,
  FieldError,
  FieldInput,
  FieldSuccess,
  Span,
  Dropdown
} from "indigo-react";

const OPTIONS = [
  {
    text: "Option 1",
    value: "option1"
  },
  {
    text: "Option 2",
    value: "option2"
  }
];

const Visual = () => (
  <React.Fragment>
    <Div maxWidth="800px">
      <H2>Basic Inputs</H2>
      <Div my={[3]} maxWidth={[12]}>
        <Span as="label" htmlFor="Email" fontSize={[1]}>
          Label
        </Span>
        <FieldInput placeholder="Placeholder" name="Email" />
        {false && <FieldError fontSize={[1]}>Error example</FieldError>}
      </Div>

      <Div my={[3]} maxWidth={[12]}>
        <Span as="label" htmlFor="Email" fontSize={[1]}>
          Label
        </Span>
        <FieldInput placeholder="Placeholder" name="Email" hasError />
        {true && <FieldError fontSize={[1]}>Error example</FieldError>}
      </Div>
      <Div my={[3]} maxWidth={[12]}>
        <Span as="label" htmlFor="Email" fontSize={[1]}>
          Label
        </Span>
        <FieldInput placeholder="Placeholder" name="Email" hasSuccess />
        {true && <FieldSuccess fontSize={[1]}>Success!</FieldSuccess>}
      </Div>
      <Div my={[3]} maxWidth={[12]}>
        <Span as="label" htmlFor="Email" fontSize={[1]} color="gray.2">
          Label
        </Span>
        <FieldInput disabled placeholder="Placeholder" name="Email" />
        {false && <FieldSuccess fontSize={[1]}>Success!</FieldSuccess>}
      </Div>
    </Div>
    <Div mt={[8]} maxWidth="800px">
      <H2>Search Inputs</H2>
      <Div my={[3]} maxWidth={[12]}>
        <FieldInput placeholder="Search" name="Search" />
      </Div>
      <Div my={[3]} maxWidth={[12]}>
        <FieldInput placeholder="Search" name="Search" hasError />
      </Div>
      <Div my={[3]} maxWidth={[12]}>
        <FieldInput placeholder="Search" name="Search" disabled />
      </Div>
    </Div>

    <Div mt={[8]} maxWidth="800px">
      <H2>Textarea</H2>
      <Div my={[3]} maxWidth={[12]}>
        <Span as="label" htmlFor="Email" fontSize={[1]}>
          Label
        </Span>
        <FieldInput
          as="textarea"
          placeholder="Distributed protocol layer gaming world order"
          name="textarea"
        />
      </Div>
      <Div my={[3]} maxWidth={[12]}>
        <Span as="label" htmlFor="Email" fontSize={[1]}>
          Label
        </Span>
        <FieldInput
          as="textarea"
          placeholder="Distributed protocol layer gaming world order"
          name="textarea"
          hasError
        />
      </Div>
      <Div my={[3]} maxWidth={[12]}>
        <Span as="label" htmlFor="Email" fontSize={[1]}>
          Label
        </Span>
        <FieldInput
          as="textarea"
          placeholder="Distributed protocol layer gaming world order"
          name="textarea"
          disabled
        />
      </Div>

      <Div mt={[8]} maxWidth="800px">
        <H2>Dropdown</H2>
        <Div my={[3]} maxWidth={[12]}>
          <Dropdown options={OPTIONS} setOption={x => console.log(x)} />
        </Div>
        <Div my={[3]} maxWidth={[12]}>
          <Dropdown
            options={OPTIONS}
            disabled
            setOption={x => console.log(x)}
          />
        </Div>
      </Div>
    </Div>
  </React.Fragment>
);

export default Visual;
