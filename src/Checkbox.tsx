import * as React from "react";
import { Indicator } from "./Indicator";
import { Icon } from "./Icon";
import classNames from "classnames";

export type CheckboxProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Checkbox = ({
  selected,
  disabled,
  hasError,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <Indicator
      selected={selected}
      disabled={disabled}
      hasError={hasError}
      className={classNames("rounded", className)}
      {...props}
    >
      <Icon icon={selected ? "CheckmarkBold" : "Blank"} />
    </Indicator>
  );
};

Checkbox.displayName = "Checkbox";
