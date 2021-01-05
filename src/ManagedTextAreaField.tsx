import * as React from "react";
import { useField } from "formik";
import { Box, StatelessTextArea, ErrorLabel, Label } from "./index";

import { CommonStyleProps } from "./system/unions";

export type ManagedTextAreaFieldProps = {
  hasError?: boolean;
  disabled?: boolean;
  placeholder?: string;
  id: string;
  label?: string;
  caption?: string;
  type?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLInputElement> &
  CommonStyleProps;

export const ManagedTextAreaField = ({
  disabled,
  hasError,
  placeholder,
  label,
  caption,
  id,
  children,
  type,
  fontFamily,
  borderColor,
  color,
  fontWeight,
  ...props
}: ManagedTextAreaFieldProps) => {
  const [field, meta] = useField(id);

  return (
    <Box display="flex" flexDirection="column" {...props}>
      <Label htmlFor={id}>{label}</Label>
      {caption ? (
        <Label mt="2" gray>
          {caption}
        </Label>
      ) : null}
      <StatelessTextArea
        borderColor={borderColor}
        color={color}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        mt={caption || label ? 2 : 0}
        disabled={disabled}
        hasError={meta.touched && meta.error !== undefined}
        placeholder={placeholder}
        {...field}
      />
      <ErrorLabel mt="2" hasError={!!(meta.touched && meta.error)}>
        {meta.error}
      </ErrorLabel>
    </Box>
  );
};

ManagedTextAreaField.displayName = "ManagedTextAreaField";
