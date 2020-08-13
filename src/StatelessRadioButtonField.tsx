import * as React from "react";
import { RadioButton } from "./RadioButton";
import { Box, BoxProps } from "./Box";
import { Col } from "./Col";

export type StatelessRadioButtonFieldProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  BoxProps;

export const StatelessRadioButtonField = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  ...props
}: StatelessRadioButtonFieldProps) => {
  return (
    <Box display="flex" onClick={onChange} {...props} cursor="pointer">
      <RadioButton
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        mr="3"
      />
      <Col>{children}</Col>
    </Box>
  );
};

StatelessRadioButtonField.displayName = "StatelessRadioButtonField";
