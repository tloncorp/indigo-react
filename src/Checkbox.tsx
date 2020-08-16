import * as React from "react";
import { Indicator } from "./Indicator";
import { Icon } from "./Icon";
import { StructuralProps } from "./systemHelpers";

export type CheckboxProps = StructuralProps & {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Checkbox = ({
  selected,
  disabled,
  hasError,
  ...props
}: CheckboxProps) => {
  return (
    <Indicator
      selected={selected}
      disabled={disabled}
      hasError={hasError}
      {...props}
    >
      <Icon icon={selected ? "CheckmarkBold" : "Blank"} />
    </Indicator>
  );
};

Checkbox.displayName = "Checkbox";
