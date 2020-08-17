import * as React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { BaseLabel } from "./BaseLabel";
import { Label } from "./Label";
import { ErrorLabel } from "./ErrorLabel";
import { Checkbox } from "./Checkbox";
import { Box } from "./Box";
import { Col } from "./Col";
import { StructureProps } from "./systemHelpers";

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
  const [field, meta] = useField({ name: id, type: "checkbox" });
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
