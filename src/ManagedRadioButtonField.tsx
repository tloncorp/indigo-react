import * as React from "react";
import { useField } from "formik";
import { ErrorLabel, RadioButton } from "./index";

type ManagedRadioButtonFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  caption?: string;
  label: string;
  id: string;
  name: string;
  disabled?: boolean;
};

export const ManagedRadioButtonField = ({
  label,
  caption,
  id,
  disabled,
  name,
  ...props
}: ManagedRadioButtonFieldProps) => {
  // This differs slightly from MangaedCheckboxField
  const [field, meta, { setTouched }] = useField({
    name,
    id,
    value: id,
    type: "radio",
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
        <RadioButton
          className="mr-4"
          name={name}
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
            name={name}
            id={id}
            disabled={disabled}
            type="radio"
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
