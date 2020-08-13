import * as React from "react";
import { Indicator } from "./Indicator";
import { SpaceProps } from "styled-system";
import { Icon } from "./Icon";

export type RadioButtonProps = SpaceProps & {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const RadioButton = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  ...props
}: RadioButtonProps) => {
  return (
    <Indicator
      selected={selected}
      disabled={disabled}
      hasError={hasError}
      borderRadius="999px"
      {...props}
    >
      <Icon icon={selected ? "Bullet" : "Blank"} />
    </Indicator>
  );
};

RadioButton.displayName = "RadioButton";
