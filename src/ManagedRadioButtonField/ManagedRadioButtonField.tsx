import * as React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { BaseLabel, Label, ErrorLabel, RadioButton, Box, Col } from "../index";
import { StructureProps } from "../systemHelpers";

type ManagedRadioButtonFieldProps = StructureProps & {
  caption?: string;
  label: string;
  id: string;
  name: string;
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

export const ManagedRadioButtonField = ({
  label,
  caption,
  id,
  disabled,
  name,
  ...props
}: ManagedRadioButtonFieldProps) => {
  // This differs slightly from MangaedCheckboxField
  const [field, meta, { setTouched }] = useField({ name, id, value: id, type: "radio" });

  // Chrome and Safari do not send blur events properly
  const onChange = React.useCallback((e: React.ChangeEvent) => {
    field.onChange(e);
    setTouched(true);
  }, [field.onChange, setTouched]);

  return (
    <Box {...props}>
      <BaseLabel
        htmlFor={id}
        display="flex"
        flexDirection="row"
        cursor="pointer"
      >
        <RadioButton
          mr="3"
          name={name}
          hasError={meta.touched && meta.error !== undefined}
          selected={field.checked}
          disabled={disabled}
        />
        <Col>
          <Label>{label}</Label>
          {caption ? (
            <Label gray mt="2">
              {caption}
            </Label>
          ) : null}
          <HiddenInput
            {...field}
            onChange={onChange}
            value={id}
            name={name}
            id={id}
            disabled={disabled}
            type="radio"
          />
          <ErrorLabel mt="2" hasError={!!(meta.touched && meta.error)}>
            {meta.error}
          </ErrorLabel>
        </Col>
      </BaseLabel>
    </Box>
  );
};
