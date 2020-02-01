import * as React from "react";
import {
  Box,
  Flex,
  Container,
  H4,
  P,
  Span,
  StyledA,
  StyledCode,
  Input,
  Label,
  InputGroup,
  LabelCaption,
  Button
  // Title,
  // Subtitles
} from "indigo-react";

import { Formik, Form, Field } from 'formik'

// import Spacing from '../components/Spacing'
// import Color from '../components/Color'
// import FontSize from '../components/FontSize'
// import FontFamily from '../components/FontFamily'
// import FontWeight from '../components/FontWeight'
// import LineHeight from '../components/LineHeight'
// import Border from '../components/Border'
// import BorderRadius from '../components/BorderRadius'
// import ZIndices from '../components/ZIndices'
// import Buttons from '../components/Buttons'

interface MyFormValues {
  firstName: string;
  lastName: string;
}


const Sandbox: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    firstName: '',
    lastName: '',
  };

  return (
    <Container>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        render={formikBag => (
          <Form>
            <InputGroup>
              <Label>First Name</Label>
              <LabelCaption>Supplementary information goes here.</LabelCaption>
              <Field name="firstname" component={Input} />
            </InputGroup>
            <InputGroup>
              <Label>Last Name</Label>
              <Field name="lastname" component={Input} />
            </InputGroup>
          </Form>
        )}
      />

      <Button>Settings...</Button>
      <Button disabled>I am disabled</Button>

    </Container>
  );
};

export default Sandbox
