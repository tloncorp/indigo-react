import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { textInput } from "./systemTokens";
import { StructuralProps, structureStyle } from "./systemHelpers";

export type StatelessTextInputFieldProps = StructuralProps & {
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

const stateStyle = (hasError: boolean, disabled: boolean) => {
  if (hasError) return textInput.state.hasError;
  if (disabled) return textInput.state.disabled;
  return textInput.state.default;
};

const style = ({
  hasError = false,
  disabled = false,
}: StatelessTextInputFieldProps) =>
  css({
    boxSizing: "border-box",
    width: "100%",
    height: 5,
    px: 2,
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    borderRadius: 2,
    ...stateStyle(hasError, disabled),
  } as SystemStyleObject);

export const StatelessTextInputField = styled.input<
  React.PropsWithChildren<StatelessTextInputFieldProps>
>(style, ...structureStyle);

StatelessTextInputField.defaultProps = {
  type: "text",
};

StatelessTextInputField.displayName = "TextInput";
