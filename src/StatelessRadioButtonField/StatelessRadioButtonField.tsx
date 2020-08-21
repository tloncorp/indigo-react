import * as React from "react";
import { RadioButton } from "../RadioButton/RadioButton";
import { Box } from "../Box/Box";
import { Col } from "../Col/Col";
import { StructureProps } from "../systemHelpers";

export type StatelessRadioButtonFieldProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
  name: string;
} & React.HTMLAttributes<HTMLDivElement> &
  StructureProps;

export const StatelessRadioButtonField = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  name,
  ...props
}: StatelessRadioButtonFieldProps) => {
  return (
    <Box display="flex" onClick={onChange} {...props} cursor="pointer">
      <RadioButton
        name={name}
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
