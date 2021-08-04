import * as React from "react";
import classNames from "classnames";

export type StatelessTextInputProps = {
  hasError?: boolean;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const stateStyle = (hasError: boolean, disabled: boolean) => {
  if (hasError) return "text-red-300 border-red-300 bg-red-100";
  if (disabled) return "text-gray-500 border-gray-200 bg-gray-100";
  return "text-black border-gray-200 bg-white";
};

export const StatelessTextInput = ({
  className,
  type = "text",
  hasError = false,
  disabled = false,
  ...props
}: StatelessTextInputProps) => (
  <input
    type={type}
    className={classNames(
      "flex items-center w-full h-8 px-2 border border-solid rounded",
      stateStyle(hasError, disabled),
      className
    )}
    {...props}
  />
);

StatelessTextInput.displayName = "TextInput";
