import styled from "styled-components";
import theme from "../../theme"
import xt from "../../extendedTheme"

import {
  color,
  space,
  layout,
  compose
} from "styled-system";

import { ButtonProps } from '../../types'

const Button = styled.button<ButtonProps>`
  border: 0;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${theme.fontSizes[0]}px;

  height: ${props => {
    if (props.sm) return theme.sizes[5] + 'px'
    if (props.md) return theme.sizes[6] + 'px'
    return theme.sizes[7] + 'px'
  }};

  min-width: ${props => {
    if (props.sm) return theme.sizes[5] + 'px'
    if (props.md) return theme.sizes[6] + 'px'
    return theme.sizes[7] + 'px'
  }};

  padding: ${props => {
    if (props.sm) return 0 + ' ' + theme.space[0] + 'px'
    if (props.md) return 0 + ' ' + theme.space[2] + 'px'
    return 0 + ' ' + theme.space[3] + 'px'
  }};

  border-radius: ${xt.borderRadiusMinor}px;

  color: ${theme.colors.black};
  border: ${theme.borders[1] + theme.colors.gray[4]};
  background-color: ${theme.colors.white};

  &:hover {
    color: ${theme.colors.black};
    border: ${theme.borders[1] + theme.colors.black};
    background-color: ${theme.colors.white};
  }

  &:focus {
    color: ${theme.colors.black};
    border: ${theme.borders[1] + theme.colors.black};
    background-color: ${theme.colors.white};
  }

  &:active {
    color: ${theme.colors.gray[3]};
    border: ${theme.borders[1] + theme.colors.gray[3]};
    background-color: ${theme.colors.white};
  }

  &:disabled {
    color: ${theme.colors.gray[3]};
    border: ${theme.borders[1] + theme.colors.gray[3]};
    background-color: ${theme.colors.gray[4]};
    cursor: not-allowed;
  }

  ${ compose (color, layout, space) }
`;



export default Button
