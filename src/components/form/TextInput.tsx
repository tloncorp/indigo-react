import * as React from 'react';
import {
  // Formik,
  // FormikHelpers,
  // FormikProps,
  // Form,
  // Field,
  FieldProps,
} from 'formik';
import Input from './Input'

const TextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, isValid }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}:FieldProps) => (
  <div>
    <Input
      type="text"
      hasError={errors[field.name] !== undefined}
      hasSuccess={isValid}
      {...field}
      {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

export default TextInput
