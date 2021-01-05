import * as React from "react";
import { Indicator } from "./Indicator";
import { Icon } from "./Icon";
import { StructureProps } from "./system/unions";

export type RadioButtonProps = StructureProps & {
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
