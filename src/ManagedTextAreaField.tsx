import * as React from "react";
import { useField } from "formik";
import { StatelessTextArea, ErrorLabel } from "./index";
import classNames from "classnames";

export type ManagedTextAreaFieldProps = {
  hasError?: boolean;
  disabled?: boolean;
  placeholder?: string;
  id: string;
  label?: string;
  caption?: string;
  autoFocus?: boolean;
  textareaClass?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLInputElement>;

export const ManagedTextAreaField = ({
  disabled,
  hasError,
  placeholder,
  label,
  caption,
  id,
  children,
  autoFocus,
  className,
  textareaClass,
  ...props
}: ManagedTextAreaFieldProps) => {
  const [field, meta] = useField(id);

  return (
    <div className={classNames("flex flex-col", className)} {...props}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {caption ? (
        <span className="label mt-2 text-gray-500">{caption}</span>
      ) : null}
      <StatelessTextArea
        id={id}
        className={classNames((caption || label) && "mt-2", textareaClass)}
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

ManagedTextAreaField.displayName = "ManagedTextAreaField";
