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
  action,
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
    disabled?: boolean;
    destructive?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
    theme: Theme
  };

  const stateColor = (destructive:boolean, disabled:boolean) => {
    if (destructive && disabled) return action.state.destructiveDisabled
    if (destructive) return action.state.destructive
    if (disabled) return action.state.defaultDisabled
    return action.state.default
  }

  const Action = styled.button(({ destructive=false, disabled=false, }:Props) => css({
    width: 'auto',
    border: 'none',
    height: 3,
    ...button.text,
    ...container.center,
    ...stateColor(destructive, disabled)
  }), space, typography, color, layout, flexbox, border);

export default Action;
