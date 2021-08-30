import classnames from "classnames";
import * as React from "react";
import { RadioButton } from "./RadioButton";

export type StatelessRadioButtonFieldProps = {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
  name: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const StatelessRadioButtonField = ({
  selected,
  disabled,
  hasError,
  onChange,
  className,
  children,
  name,
  ...props
}: StatelessRadioButtonFieldProps) => {
  return (
    <div
      className={classnames("flex cursor-pointer", className)}
      onClick={onChange}
      {...props}
    >
      <RadioButton
        name={name}
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        className="mr-4"
      />
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

StatelessRadioButtonField.displayName = "StatelessRadioButtonField";
