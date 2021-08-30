import * as React from "react";
import { useField } from "formik";
import { ErrorLabel, Checkbox } from "./index";

type ManagedCheckboxFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  caption?: string;
  label: string;
  id: string;
  disabled?: boolean;
};

export const ManagedCheckboxField = ({
  label,
  caption,
  id,
  disabled,
  ...props
}: ManagedCheckboxFieldProps) => {
  const [field, meta, { setTouched }] = useField({
    name: id,
    type: "checkbox",
  });

  // Chrome and Safari do not send blur events properly
  const onChange = React.useCallback(
    (e: React.ChangeEvent) => {
      setTouched(true);
      field.onChange(e);
    },
    [field.onChange, setTouched]
  );

  return (
    <div {...props}>
      <label htmlFor={id} className="flex cursor-pointer">
        <Checkbox
          className="mr-4"
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
            onChange={onChange}
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
