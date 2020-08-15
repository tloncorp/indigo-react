import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";
import { textInput } from "./tokens";

export type StatelessTextInputFieldProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
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
>(style, border, color, flexbox, layout, position, space);

StatelessTextInputField.defaultProps = {
  type: "text",
};
StatelessTextInputField.displayName = "TextInput";
