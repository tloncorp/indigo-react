import * as React from "react";
import classNames from "classnames";

export type ToggleSwitchProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const stateStyle = (
  selected: boolean,
  hasError: boolean,
  disabled: boolean
) => {
  if (selected && disabled)
    return "bg-gray-200 before:opacity-70 before:translate-x-2";
  if (hasError && selected) return "bg-red-300 before:translate-x-2";
  if (hasError) return "bg-red-300";
  if (disabled) return "bg-gray-200 before:opacity-70";
  if (selected) return "bg-blue-400 before:translate-x-2";
  return "bg-gray-200";
};

export const ToggleSwitch = ({
  className,
  selected = false,
  hasError = false,
  disabled = false,
  ...props
}: ToggleSwitchProps) => (
  <div
    className={classNames(
      "flex-none relative w-6 h-4 border border-solid border-transparent rounded-full cursor-pointer",
      "before:absolute before:block before:p-1.5 before:border before:border-solid before:border-transparent before:bg-white before:rounded-full",
      stateStyle(selected, hasError, disabled),
      className
    )}
    {...props}
  />
);

ToggleSwitch.displayName = "ToggleSwitch";
