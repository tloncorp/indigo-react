import * as React from "react";
import { Box, BoxProps } from "./Box";
import { Col } from "./Col";
import { TextInput } from "./TextInput";

export type StatelessTextInputFieldProps = {
  hasError?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  BoxProps;

export const StatelessTextInputField = ({
  disabled,
  hasError,
  onChange,
  value,
  placeholder,
  children,
  ...props
}: StatelessTextInputFieldProps) => {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      <Col>{children}</Col>
      <TextInput
        onChange={onChange}
        disabled={disabled}
        hasError={hasError}
        value={value}
        placeholder={placeholder}
      />
    </Box>
  );
};

StatelessTextInputField.displayName = "StatelessTextInputField";
