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

export type TextInputProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    hasError?: boolean;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
  } & React.HTMLAttributes<HTMLInputElement>;

const stateStyle = (hasError: boolean, disabled: boolean) => {
  if (hasError) return textInput.state.hasError;
  if (disabled) return textInput.state.disabled;
  return textInput.state.default;
};

const style = ({ hasError = false, disabled = false }: TextInputProps) =>
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

export const TextInput = styled.input<React.PropsWithChildren<TextInputProps>>(
  style,
  border,
  color,
  flexbox,
  layout,
  position,
  space
);

TextInput.defaultProps = {
  type: "text",
};
TextInput.displayName = "TextInput";
