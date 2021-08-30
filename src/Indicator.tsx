import * as React from "react";
import classNames from "classnames";

export type IndicatorProps = React.HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  selected?: boolean;
  hasError?: boolean;
};

const stateStyle = (
  disabled: boolean,
  hasError: boolean,
  selected: boolean
) => {
  if (selected && disabled) return "text-gray-200 border-gray-200 bg-gray-100";
  if (selected && hasError) return "text-white border-red-300 bg-red-300";
  if (selected) return "text-white border-blue-400 bg-blue-400";
  if (disabled) return "text-transparent border-gray-200 bg-gray-100";
  if (hasError) return "text-transparent border-red-300 bg-red-100";
  return "text-transparent border-gray-200 bg-white";
};

export const Indicator = ({
  className,
  children,
  selected = false,
  hasError = false,
  disabled = false,
}: IndicatorProps) => (
  <div
    className={classNames(
      "indicator w-4 h-4 border border-solid cursor-pointer",
      stateStyle(disabled, hasError, selected),
      className
    )}
  >
    {children}
  </div>
);

Indicator.displayName = "Indicator";
