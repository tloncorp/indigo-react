import * as React from "react";
import Indicator from "./Indicator";
import { Box, BoxProps } from "./Box";
import Icon from "./Icon";

export type StatelessCheckboxProps = BoxProps & {
  selected: boolean;
  hasError: boolean;
  disabled: boolean;
};

export const StatelessCheckbox = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  ...props
}: StatelessCheckboxProps) => {
  return (
    <Box display="flex" onClick={onChange} p="3" {...props}>
      <Indicator selected={selected} disabled={disabled} hasError={hasError}>
        <Icon icon={selected ? "CheckmarkBold" : "NullIcon"} />
      </Indicator>
      {children}
    </Box>
  );
};

StatelessCheckbox.displayName = "StatelessCheckbox";
