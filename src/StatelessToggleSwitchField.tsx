import * as React from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { StructureProps } from "./system/unions";
import classnames from "classnames";

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
  className,
  children,
  ...props
}: StatelessToggleSwitchFieldProps) => {
  return (
    <div
      className={classnames("flex cursor-pointer", className)}
      onClick={onChange}
      {...props}
    >
      <ToggleSwitch
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        mr="2"
      />
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

StatelessToggleSwitchField.displayName = "StatelessToggleSwitchField";
