import * as React from "react";
import { Box } from "../Box/Box";
import { Col } from "../Col/Col";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { StructureProps } from "../systemHelpers";

export type StatelessToggleSwitchFieldProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  StructureProps;

export const StatelessToggleSwitchField = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  ...props
}: StatelessToggleSwitchFieldProps) => {
  return (
    <Box display="flex" onClick={onChange} {...props} cursor="pointer">
      <ToggleSwitch
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        mr="2"
      />
      <Col>{children}</Col>
    </Box>
  );
};

StatelessToggleSwitchField.displayName = "StatelessToggleSwitchField";
