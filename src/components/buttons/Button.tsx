import styled from "styled-components";
import theme from "../../theme"
import xt from "../../extendedTheme"

import {
  border, BorderProps,
  color, ColorProps,
  flexbox, FlexboxProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from "styled-system";

interface Props extends BorderProps, ColorProps, FlexboxProps, LayoutProps, SpaceProps, TypographyProps {}

const Button32BorderedText = styled.button<Props>`
  border: 0;
  outline: none;
  cursor: pointer;

  font-size: ${theme.fontSizes[0]}px;

  height: ${theme.sizes[7]}px;

  padding-right: ${theme.sizes[3]}px;
  padding-left: ${theme.sizes[3]}px;

  border-radius: ${xt.global.borderRadiusMinor}px;

  color: ${xt.buttons.default.color};
  border: ${xt.buttons.default.border};
  background-color: ${xt.buttons.default.backgroundColor};

  &:focus {
    color: ${xt.buttons.focus.color};
    border: ${xt.buttons.focus.border};
    background-color: ${xt.buttons.focus.backgroundColor};
  }

  &:hover {
    color: ${xt.buttons.hover.color};
    border: ${xt.buttons.hover.border};
    background-color: ${xt.buttons.hover.backgroundColor};
  }

  &:active {
    color: ${xt.buttons.active.color};
    border: ${xt.buttons.active.border};
    background-color: ${xt.buttons.active.backgroundColor};
  }

  &:disabled {
    color: ${xt.buttons.disabled.color};
    border: ${xt.buttons.disabled.border};
    background-color: ${xt.buttons.disabled.backgroundColor};
    cursor: not-allowed;
  }

  ${compose(
    space,
    layout,
    color,
    border,
    flexbox,
    typography
  )};
`;

export default Button32BorderedText
