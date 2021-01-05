import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { container, button } from "./system/tokens";
import { CommonStyleProps, commonStyle } from "./system/unions";

export type ButtonProps = CommonStyleProps & {
  primary?: boolean;
  disabled?: boolean;
  destructive?: boolean;
};

const stateStyle = (
  primary: boolean,
  destructive: boolean,
  disabled: boolean
) => {
  if (destructive && primary && disabled)
    return button.state.destructivePrimaryDisabled;
  if (primary && disabled) return button.state.primaryDisabled;
  if (destructive && disabled) return button.state.destructiveDisabled;
  if (destructive && primary) return button.state.destructivePrimary;
  if (destructive) return button.state.destructive;
  if (primary) return button.state.primary;
  if (disabled) return button.state.defaultDisabled;
  return button.state.default;
};

const style = ({
  primary = false,
  destructive = false,
  disabled = false,
}: ButtonProps) =>
  css({
    width: "auto",
    border: "1px solid",
    height: 5,
    borderRadius: 2,
    overflow: "hidden",
    px: 3,
    ...button.text,
    ...container.center,
    ...stateStyle(primary, destructive, disabled),
  } as SystemStyleObject);

export const Button = styled.button<React.PropsWithChildren<ButtonProps>>(
  style,
  ...commonStyle
);

export const asButton = (component: React.FC) =>
  styled(component)<React.PropsWithChildren<ButtonProps>>(
    style,
    ...commonStyle
  );

Button.displayName = "Button";
