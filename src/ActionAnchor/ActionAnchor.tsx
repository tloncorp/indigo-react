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
import { action, button } from "../systemTokens";

export type ActionAnchorProps = FlexboxProps &
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

const style = ({ destructive = false, disabled = false }: ActionAnchorProps) =>
  css({
    width: "auto",
    border: "none",
    overflow: "hidden",
    height: 3,
    textDecoration: "none",
    ...button.text,
    ...stateColor(destructive, disabled),
  } as SystemStyleObject);

const styleProps = [border, color, flexbox, layout, space, typography];

export const ActionAnchor = styled.a<
  React.PropsWithChildren<ActionAnchorProps>
>(style, ...styleProps);

ActionAnchor.displayName = "ActionAnchor";
