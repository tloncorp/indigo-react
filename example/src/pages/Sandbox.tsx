import * as React from "react";
import {
  Box,
  Flex,
  Container,
  H4,
  H1,
  P,
  Span,
  StyledA,
  StyledCode,
  Input,
  Label,
  InputGroup,
  LabelCaption,
  Button,
  IconButton,
  Icon,
  Pad,
  Title,
  Subtitle,
  DividerBox,
  Hr,
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

interface FormValues {
  firstName: string;
  lastName: string;
}


const Sandbox: React.FC<{}> = () => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
  };

  return (
    <Container>
      <Title>Urbit 101</Title>
      <Subtitle>Intro to Cryptography</Subtitle>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
      {(props) => (
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
      </Formik>
      <Pad>
        <Button mt="2">Settings...</Button>

        <Button disabled mt="2">I am disabled</Button>

        <Button md mt="2">Medium</Button>

        <Button sm mt="2">Small</Button>

        <IconButton
          mt="2"
          iconRight='ChevronSouth'
          onClick={() => {alert('HELLO');}}>
          Icon
        </IconButton>

        <IconButton mt="2" sm icon='ChevronSouth'> </IconButton>

        <Icon mt="2" />

      </Pad>

      <DividerBox>
        <Title>Urbit 101</Title>
        <Subtitle>Intro to Cryptography</Subtitle>
        <Hr />
        <Pad>
          <Button>Settings...</Button>
        </Pad>
      </DividerBox>

    </Container>
  );
};

export default Sandbox
