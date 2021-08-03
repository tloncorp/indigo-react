import * as React from "react";
import { useField } from "formik";

import { StatelessTextInput } from "./StatelessTextInput";
import { ErrorLabel } from "./ErrorLabel";
import { CommonStyleProps } from "./system/unions";
import classNames from "classnames";

export type ManagedTextInputFieldProps = {
  hasError?: boolean;
  disabled?: boolean;
  placeholder?: string;
  id: string;
  label?: string;
  caption?: string;
  type?: string;
  autoFocus?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLInputElement> &
  CommonStyleProps;

export const ManagedTextInputField = ({
  disabled,
  hasError,
  placeholder,
  label,
  caption,
  id,
  children,
  className,
  type,
  fontFamily,
  borderColor,
  color,
  fontWeight,
  autoFocus,
  ...props
}: ManagedTextInputFieldProps) => {
  const [field, meta] = useField(id);

  return (
    <div className={classNames("flex flex-col", className)} {...props}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {caption ? (
        <span className="label mt-2 text-gray-500">{caption}</span>
      ) : null}
      <StatelessTextInput
        borderColor={borderColor}
        color={color}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        type={type || "text"}
        mt={caption || label ? 2 : 0}
        disabled={disabled}
        hasError={meta.touched && meta.error !== undefined}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...field}
      />
      <ErrorLabel className="mt-2" hasError={!!(meta.touched && meta.error)}>
        {meta.error}
      </ErrorLabel>
    </div>
  );
};

ManagedTextInputField.displayName = "ManagedTextInputField";
