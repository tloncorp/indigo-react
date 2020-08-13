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
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { container, button } from "./tokens";

export type ButtonProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  TypographyProps & {
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

const variation = ({
  primary = false,
  destructive = false,
  disabled = false,
}: ButtonProps) =>
  css({
    width: "auto",
    border: "1px solid",
    height: 5,
    borderRadius: 2,
    px: 3,
    ...button.text,
    ...container.center,
    ...stateStyle(primary, destructive, disabled),
  } as SystemStyleObject);

const system = [border, color, flexbox, layout, space, typography];

export const Button = styled.button<React.PropsWithChildren<ButtonProps>>(
  variation,
  ...system
);

Button.displayName = "Button";
