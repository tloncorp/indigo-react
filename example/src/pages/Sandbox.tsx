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
  ValidationMessage,
  Hr,
} from "indigo-react";
import * as Yup from 'yup';
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
  email: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


const Sandbox: React.FC<{}> = () => {
  const initialValues: FormValues = {
    firstName: 'First Name',
    lastName: '',
    email: '',
  };

  return (
    <Container>
      <Title>Urbit 101</Title>
      <Subtitle>Intro to Cryptography</Subtitle>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
      {(props) => (
        <Form>
          <Pad>
            <Label>First Name</Label>
            <LabelCaption>Supplementary information goes here.</LabelCaption>
            <Field
              onChange={props.handleChange}
              id="firstName"
              name="firstName"
              hasError={props.errors.firstName && props.touched.firstName}
              component={Input} />
            <ValidationMessage
              error={props.errors.firstName}
              touched={props.touched.firstName}
            />
          </Pad>

          <Pad>
            <Label>Last Name</Label>
            <Field
              onChange={props.handleChange}
              id="lastName"
              name="lastName"
              hasError={props.errors.lastName && props.touched.lastName}
              component={Input} />
            <ValidationMessage
              error={props.errors.lastName}
              touched={props.touched.lastName}
            />
          </Pad>

          <Pad>
            <Label>Email</Label>
            <Field
              onChange={props.handleChange}
              id="email"
              name="email"
              hasError={props.errors.email && props.touched.email}
              component={Input} />
            <ValidationMessage
              error={props.errors.email}
              touched={props.touched.email}
            />
          </Pad>

          <Pad>
            <Button type="submit">Submit</Button>
          </Pad>
        </Form>
      )}
      </Formik>

      {
        // <Pad>
        //   <Button mt="2">Settings...</Button>
        //
        //   <Button disabled mt="2">I am disabled</Button>
        //
        //   <Button md mt="2">Medium</Button>
        //
        //   <Button sm mt="2">Small</Button>
        //
        //   <IconButton
        //     mt="2"
        //     iconRight='ChevronSouth'
        //     onClick={() => {alert('HELLO');}}>
        //     Icon
        //   </IconButton>
        //
        //   <IconButton mt="2" sm icon='ChevronSouth'> </IconButton>
        //
        //   <Icon mt="2" />
        //
        // </Pad>
        //
        // <DividerBox>
        //   <Title>Urbit 101</Title>
        //   <Subtitle>Intro to Cryptography</Subtitle>
        //   <Hr />
        //   <Pad>
        //     <Button>Settings...</Button>
        //   </Pad>
        // </DividerBox>
      }


    </Container>
  );
};

export default Sandbox
