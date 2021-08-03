import * as React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { BaseLabel, Label, ErrorLabel, Checkbox } from "./index";

type ManagedCheckboxFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  caption?: string;
  label: string;
  id: string;
  disabled?: boolean;
};

// Hide this input completely
const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0px;
`;

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
      <BaseLabel
        htmlFor={id}
        display="flex"
        flexDirection="row"
        cursor="pointer"
      >
        <Checkbox
          mr="3"
          hasError={meta.touched && meta.error !== undefined}
          selected={field.checked}
          disabled={disabled}
        />
        <div className="flex flex-col">
          <Label>{label}</Label>
          {caption ? (
            <Label gray mt="1">
              {caption}
            </Label>
          ) : null}
          <HiddenInput
            {...field}
            onChange={onChange}
            value={id}
            name={id}
            id={id}
            disabled={disabled}
            type="checkbox"
          />
          <ErrorLabel
            className="mt-2"
            hasError={!!(meta.touched && meta.error)}
          >
            {meta.error}
          </ErrorLabel>
        </div>
      </BaseLabel>
    </div>
  );
};
