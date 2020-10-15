import * as React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { BaseLabel, Label, ErrorLabel, Checkbox, Box, Col } from "../index";
import { StructureProps } from "../systemHelpers";

type ManagedCheckboxFieldProps = StructureProps & {
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
  const [field, meta] = useField({
    name: id,
    type: "checkbox",
  });

  // Chrome and Safari do not send blur events properly
  // const onChange = React.useCallback(
  //   (e: React.ChangeEvent) => {
  //     field.onChange(e);
  //     setTouched(true);
  //   },
  //   [field.onChange, setTouched]
  // );

  console.log(meta.error, meta.touched);

  return (
    <Box {...props}>
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
        <Col>
          <Label>{label}</Label>
          {caption ? (
            <Label gray mt="2">
              {caption}
            </Label>
          ) : null}
          <HiddenInput
            {...field}
            // onChange={onChange}
            value={id}
            name={id}
            id={id}
            disabled={disabled}
            type="checkbox"
          />
          <ErrorLabel mt="2" hasError={!!(meta.touched && meta.error)}>
            {meta.error}
          </ErrorLabel>
        </Col>
      </BaseLabel>
    </Box>
  );
};
