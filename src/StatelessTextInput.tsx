import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { textInput } from "./system/tokens";
import { CommonStyleProps, commonStyle } from "./system/unions";

export type StatelessTextInputProps = CommonStyleProps & {
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
}: StatelessTextInputProps) =>
  css({
    boxSizing: "border-box",
    width: "100%",
    height: 5,
    px: 2,
    display: "flex",
    alignItems: "center",
    // border: "1px solid",
    borderRadius: 2,
    ...textInput.text,
    ...stateStyle(hasError, disabled),
  } as SystemStyleObject);

export const StatelessTextInput = styled.input<
  React.PropsWithChildren<StatelessTextInputProps>
>(style, ...commonStyle);

StatelessTextInput.defaultProps = {
  type: "text",
};

StatelessTextInput.displayName = "TextInput";
