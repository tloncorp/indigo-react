import styled from 'styled-components';
import xt from '../../extendedTheme';

import {
  ColorProps,
  color,
  space,
  SpaceProps,
  LayoutProps,
  layout,
  compose,
} from 'styled-system';

type ButtonProps = ColorProps &
  LayoutProps &
  SpaceProps & {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    onClick?: Function;
  };

const Button = styled.button<ButtonProps>`
  border: 0;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  * {
    fill: ${p => {
      if (p.theme.dark) return p.theme.colors.white;
      return p.theme.colors.black;
    }};
  }

  font-size: ${p => p.theme.fontSizes[0]}px;

  height: ${p => {
    if (p.sm) return p.theme.sizes[5] + 'px';
    if (p.md) return p.theme.sizes[6] + 'px';
    return p.theme.sizes[7] + 'px';
  }};

  min-width: ${p => {
    if (p.sm) return p.theme.sizes[5] + 'px';
    if (p.md) return p.theme.sizes[6] + 'px';
    return p.theme.sizes[7] + 'px';
  }};

  padding: ${p => {
    if (p.sm) return 0 + ' ' + p.theme.space[0] + 'px';
    if (p.md) return 0 + ' ' + p.theme.space[2] + 'px';
    return 0 + ' ' + p.theme.space[3] + 'px';
  }};

  border-radius: ${xt.borderRadiusMinor}px;

  color: ${p => {
    if (p.theme.dark) return p.theme.colors.white;
    return p.theme.colors.black;
  }};

  border-width: 1px;
  border-style: solid;
  border-color: ${p => {
    if (p.theme.dark) return p.theme.colors.grayDarkest;
    return p.theme.colors.grayLight;
  }};

  background-color: ${p => {
    if (p.theme.dark) return p.theme.colors.black;
    return p.theme.colors.white;
  }};

  &:hover {
    border-color: ${p => {
      if (p.theme.dark) return p.theme.colors.white;
      return p.theme.colors.black;
    }};
  }

  &:focus {
    border-color: ${p => {
      if (p.theme.dark) return p.theme.colors.white;
      return p.theme.colors.black;
    }};
    background-color: ${p => {
      if (p.theme.dark) return p.theme.colors.black;
      return p.theme.colors.white;
    }};
  }

  &:active {
    border-color: ${p => {
      if (p.theme.dark) return p.theme.colors.white;
      return p.theme.colors.black;
    }};
  }

  &:disabled {
    color: ${p => p.theme.colors.grayMid};
    border-color: ${p => p.theme.colors.grayMid};
    background-color: ${p => {
      if (p.theme.dark) return p.theme.colors.grayMid;
      return p.theme.colors.grayLightest;
    }};
    cursor: not-allowed;
  }

  ${compose(color, layout, space)}
`;

export default Button;
