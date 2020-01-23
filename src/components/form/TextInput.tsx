import * as React from 'react';
import {
  // Formik,
  // FormikHelpers,
  // FormikProps,
  // Form,
  // Field,
  FieldProps,
} from 'formik';

const TextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}:FieldProps) => (
  <div>
    <input type="text" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

export default TextInput
