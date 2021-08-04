import * as React from "react";
import { useField } from "formik";
import { ToggleSwitch, ErrorLabel } from "./index";

type ManagedToggleSwitchFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  caption?: string;
  label: string;
  id: string;
  disabled?: boolean;
};

export const ManagedToggleSwitchField = ({
  label,
  caption,
  id,
  disabled,
  ...props
}: ManagedToggleSwitchFieldProps) => {
  const [field, meta] = useField({ name: id, type: "checkbox" });
  return (
    <div {...props}>
      <label htmlFor={id} className="flex cursor-pointer">
        <ToggleSwitch
          className="mr-2"
          hasError={meta.touched && meta.error !== undefined}
          selected={field.checked}
          disabled={disabled}
        />
        <div className="flex flex-col">
          <span className="label">{label}</span>
          {caption ? (
            <span className="label mt-1 text-gray-500">{caption}</span>
          ) : null}
          <input
            {...field}
            value={id}
            name={id}
            id={id}
            disabled={disabled}
            type="checkbox"
            className="sr-only"
          />
          <ErrorLabel
            className="mt-2"
            hasError={!!(meta.touched && meta.error)}
          >
            {meta.error}
          </ErrorLabel>
        </div>
      </label>
    </div>
  );
};
