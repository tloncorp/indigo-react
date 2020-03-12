import * as React from "react";
import {
  Input,
  Button,
  Icon,
  Text,
  DividerBox,
  Rule,
  Radio,
  InputLabel,
  Box,
  Space,
  Checkbox,
  Row,
  Indefinite,
  AsyncButton,
  TextArea,
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
  iagree: boolean;
  about: string;
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
  about: Yup.string(),
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
  iagree: Yup.boolean().test('isTrue', 'You must agree to the TOS before proceeding', v => !!v)
});

type Props = {
  loading:boolean
  toggleLoading:Function
}

const Sandbox: React.FC<Props> = (props) => {

  const initialValues: FormValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    color: 'green',
    urbitid: '',
    disabledfield: '',
    iagree: false,
    about: ''
  };

  return (
    <Box maxWidth='400px' m='9'>

      <Space py='2'>
        <Text>Form Example</Text>

        <Text gray>Cryptography or cryptology (from Ancient Greek: κρυπτός, romanized: kryptós "hidden, secret"; and γράφειν graphein, "to write", or -λογία -logia, "study", respectively) is the practice and study of techniques for secure communication in the presence of third parties called adversaries.</Text>
      </ Space>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          props.toggleLoading()
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        <Form>
          <Space my='2'>
            <Input
              label="First Name"
              id="firstName"
              caption="Please enter your first name."
              placeholder="Felicia"
            />

            <Input
              label="Middle Name"
              id="middleName"
              placeholder="Nancy"
            />

            <Input
              label="Last Name"
              id="lastName"
              placeholder="Atkinson"
            />

            <TextArea
              label="Tell us about yourself"
              id='about'
            />


            <Box>
              <InputLabel>Favorite Color</InputLabel>
              <Radio
                label="Green"
                id="green"
                name="color"
                caption="Select if your favorite color is green."
              />
              <Radio
                label="Blue"
                id="blue"
                name="color"
                caption="Select if your favorite color is blue."
              />
              <Radio
                id="dog"
                name="color"
                label="Dog"
                caption="Dog is not a color"
                disabled
              />
            </Box>

            <Input
              label="Urbit ID"
              id="urbitid"
              placeholder="~"
            />

            <Input
              label="Disabled Field"
              id="disabledfield"
              placeholder=""
              disabled
            />

            <Checkbox
              label='I agree'
              caption="Responsibility or liability for the frequency of provision and accuracy of the BBA LIBOR rate or any use made of the BBA LIBOR rate by the subscriber, whether or not arising from the negligence of any of BBAE or the Suppliers."
              id='iagree'
            />

            <Row>
              <Button mr='4' caution>Cancel</Button>
              <AsyncButton
                type="submit"
                primary
                loading={props.loading}>
                Submit
              </AsyncButton>
            </Row>
          </Space>
        </Form>
    </Formik>

      <Rule />

    <Text>Buttons</Text>


      <Button mt="2">Settings...</Button>

      <Button disabled mt="2">Disabled</Button>

      <Button sm mt="2">sm</Button>

      <Icon mt="2" />


      <Indefinite loading={true} />




    </Box>
  );
};

export default Sandbox
