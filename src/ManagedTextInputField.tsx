import * as React from "react";
import { useField } from "formik";

import { Box, BoxProps } from "./Box";
import { StatelessTextInputField } from "./StatelessTextInputField";
import { ErrorLabel } from "./ErrorLabel";
import { Label } from "./Label";

export type ManagedTextInputFieldProps = {
  hasError?: boolean;
  disabled?: boolean;
  placeholder?: string;
  id: string;
  label?: string;
  caption?: string;
  type?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLInputElement> &
  BoxProps;

export const ManagedTextInputField = ({
  disabled,
  hasError,
  placeholder,
  label,
  caption,
  id,
  children,
  type,
  ...props
}: ManagedTextInputFieldProps) => {
  const [field, meta] = useField(id);

  return (
    <Box display="flex" flexDirection="column" {...props}>
      <Label htmlFor={id}>{label}</Label>
      {caption ? (
        <Label mt="2" gray>
          {caption}
        </Label>
      ) : null}
      <StatelessTextInputField
        type={type || "text"}
        mt="2"
        disabled={disabled}
        hasError={meta.touched && meta.error !== undefined}
        placeholder={placeholder}
        {...field}
      />
      {meta.touched && meta.error ? (
        <ErrorLabel>{meta.error}</ErrorLabel>
      ) : null}
    </Box>
  );
};

ManagedTextInputField.displayName = "ManagedTextInputField";
