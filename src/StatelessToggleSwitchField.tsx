import * as React from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import classnames from "classnames";

export type StatelessToggleSwitchFieldProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

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
        className="mr-2"
      />
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

StatelessToggleSwitchField.displayName = "StatelessToggleSwitchField";
