import * as React from "react";
import { useField } from "formik";

import { Box } from "./Box";
import { StatelessTextAreaField } from "./StatelessTextAreaField";
import { ErrorLabel } from "./ErrorLabel";
import { Label } from "./Label";
import { StructureProps } from "./systemHelpers";

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
  StructureProps;

export const ManagedTextAreaField = ({
  disabled,
  hasError,
  placeholder,
  label,
  caption,
  id,
  children,
  type,
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
      <StatelessTextAreaField
        mt="2"
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
