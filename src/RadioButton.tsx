import * as React from "react";
import { Indicator } from "./Indicator";
import { Icon } from "./Icon";
import classNames from "classnames";

export type RadioButtonProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
  name: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const RadioButton = ({
  selected,
  disabled,
  hasError,
  onChange,
  name,
  className,
  children,
  ...props
}: RadioButtonProps) => {
  return (
    <Indicator
      selected={selected}
      disabled={disabled}
      hasError={hasError}
      className={classNames("rounded-full", className)}
      {...props}
    >
      <Icon icon={selected ? "Bullet" : "Blank"} />
    </Indicator>
  );
};

RadioButton.displayName = "RadioButton";
