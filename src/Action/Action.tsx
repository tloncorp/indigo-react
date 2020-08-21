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
import { container, action, button } from "../systemTokens";

export type ActionProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  TypographyProps & {
    disabled?: boolean;
    destructive?: boolean;
  };

const stateColor = (destructive: boolean, disabled: boolean) => {
  if (destructive && disabled) return action.state.destructiveDisabled;
  if (destructive) return action.state.destructive;
  if (disabled) return action.state.defaultDisabled;
  return action.state.default;
};

const style = ({ destructive = false, disabled = false }: ActionProps) =>
  css({
    width: "auto",
    border: "none",
    overflow: "hidden",
    height: 3,
    ...button.text,
    ...container.center,
    ...stateColor(destructive, disabled),
  } as SystemStyleObject);

const styleProps = [border, color, flexbox, layout, space, typography];

export const Action = styled.button<React.PropsWithChildren<ActionProps>>(
  style,
  ...styleProps
);

Action.displayName = "Action";
