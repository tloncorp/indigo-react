import styled from "styled-components";
import css from '@styled-system/css'

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
  compose
} from "styled-system";
import { 
  container,
  button,
} from '../tokens'
import { Theme } from "@tlon/indigo-light";

type Props =
  FlexboxProps & 
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  TypographyProps &
  {
    primary?: boolean,
    disabled?: boolean;
    destructive?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  };

const stateColor = (primary:boolean, destructive:boolean, disabled:boolean) => {
  if (destructive && disabled && primary) return button.state.destructivePrimaryDisabled
  if (primary && disabled) return button.state.primaryDisabled
  if (destructive && disabled) return button.state.destructiveDisabled
  if (destructive && primary) return button.state.destructivePrimary
  if (destructive) return button.state.destructive
  if (primary) return button.state.primary
  if (disabled) return button.state.defaultDisabled
  return button.state.default
}

const Button = styled.button(({ primary=false, destructive=false, disabled=false, }:Props) => css({
  width: 'auto',
  border: '1px solid',
  height: 5,
  borderRadius: 2,
  px: 2,
  ...button.text,
  ...container.center,
  ...stateColor(primary, destructive, disabled)
}), space, typography, color, layout, flexbox, border);

export default Button;
