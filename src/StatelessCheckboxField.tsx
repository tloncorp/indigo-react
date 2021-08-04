import classNames from "classnames";
import * as React from "react";
import { Checkbox } from "./index";

export type StatelessCheckboxFieldProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const StatelessCheckboxField = ({
  selected,
  disabled,
  hasError,
  onChange,
  className,
  children,
  ...props
}: StatelessCheckboxFieldProps) => {
  return (
    <div
      className={classNames("flex cursor-pointer", className)}
      onClick={onChange}
      {...props}
    >
      <Checkbox
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        className="mr-4"
      />
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

StatelessCheckboxField.displayName = "StatelessCheckboxField";
