import * as React from "react";
import classNames from "classnames";

export type StatelessTextAreaProps = {
  hasError?: boolean;
  disabled?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const stateStyle = (hasError: boolean, disabled: boolean) => {
  if (hasError) return "text-red-300 border-red-300 bg-red-100";
  if (disabled) return "text-gray-500 border-gray-200 bg-gray-100";
  return "text-black border-gray-200 bg-white";
};

export const StatelessTextArea = ({
  className,
  cols = 8,
  hasError = false,
  disabled = false,
  ...props
}: StatelessTextAreaProps) => (
  <textarea
    cols={cols}
    className={classNames(
      "w-full min-h-[8] p-2 border border-solid rounded resize-y",
      stateStyle(hasError, disabled),
      className
    )}
    {...props}
  />
);

StatelessTextArea.displayName = "StatelessTextArea";
