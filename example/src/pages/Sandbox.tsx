import * as React from "react";
import {
  Input,
  Button,
  Icon,
  Pad,
  T3,
  DividerBox,
  Rule,
  Radio,
  InputLabel,
  Box,
} from "indigo-react";
import * as Yup from 'yup';
import { Formik, Form } from 'formik'
import ob from 'urbit-ob'

interface FormValues {
  firstName: string;
  middleName: string;
  lastName: string;
  color: string;
  urbitid: string;
  disabledfield: string;
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
  middleName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  color: Yup.string()
    .oneOf(['blue', 'green']),
  urbitid: Yup.string()
    .test(
      'is-patp',
      'Not a valid Urbit ID',
      (value) => {
        if (value) return ob.isValidPatp(value)
        return
      })
    .required('An Urbit ID is Required'),
  disabledfield: Yup.string(),
});


const Sandbox: React.FC<{}> = () => {

  const initialValues: FormValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    color: 'green',
    urbitid: '',
    disabledfield: '',
  };

  return (
    <Box maxWidth='400px'>
      <Pad><T3>Form Example</T3></Pad>
      
      <Pad><T3 gray>Cryptography or cryptology (from Ancient Greek: κρυπτός, romanized: kryptós "hidden, secret"; and γράφειν graphein, "to write", or -λογία -logia, "study", respectively) is the practice and study of techniques for secure communication in the presence of third parties called adversaries.</T3></Pad>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        <Form>
          <Pad>
            <Input
              type="text"
              label="First Name"
              name="firstName"
              caption="Please enter your first name."
              placeholder="Felicia"
            />
          </Pad>

          <Pad>
            <Input
              type="text"
              label="Middle Name"
              name="middleName"
              placeholder="Nancy"
            />
          </Pad>

          <Pad>
            <Input
              type="text"
              label="Last Name"
              name="lastName"
              placeholder="Atkinson"
            />
          </Pad>

          <Pad marginBottom="16px">
            <InputLabel>Favorite Color</InputLabel>
            <Radio
              type="radio"
              label="Green"
              id="green"
              name="color"
              caption="Select if your favorite color is green."
            />
            <Radio
              type="radio"
              label="Blue"
              id="blue"
              name="color"
              caption="Select if your favorite color is blue."
            />
            <Radio
              type="radio"
              label="Dog"
              id="dog"
              name="color"
              caption="Dog is not a color"
              disabled
            />
          </Pad>

          <Pad>
            <Input
              type="text"
              label="Urbit ID"
              name="urbitid"
              placeholder="~"
            />
          </Pad>

          <Pad>
            <Input
              type="text"
              label="Disabled Field"
              name="disabledfield"
              placeholder=""
              disabled
            />
          </Pad>

          <Pad>
            <Button type="submit">Submit</Button>
          </Pad>
      </Form>
    </Formik>

    <Pad>
      <Rule />
    </Pad>

    <Pad><T3>Buttons</T3></Pad>

    <Pad>
      <Button mt="2">Settings...</Button>

      <Button disabled mt="2">I am disabled</Button>

      <Button md mt="2">Medium</Button>

      <Icon mt="2" />
    </Pad>



    <DividerBox>
      <Pad><T3>Urbit 101</T3></Pad>
      <Pad><T3 gray>Intro to Cryptography</T3></Pad>
      <Rule />
      <Pad>
        <Button>Settings...</Button>
      </Pad>
    </DividerBox>


    </Box>
  );
};

export default Sandbox
