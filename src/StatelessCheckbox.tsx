import * as React from "react";
import { Indicator } from "./Indicator";
import { Box } from "./Box";
import { Icon } from "./Icon";

export type StatelessCheckboxProps = {
  selected: boolean;
  hasError: boolean;
  disabled: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

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
      <Indicator
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        mr="2"
      >
        <Icon icon={selected ? "CheckmarkBold" : "NullIcon"} />
      </Indicator>
      {children}
    </Box>
  );
};

StatelessCheckbox.displayName = "StatelessCheckbox";
