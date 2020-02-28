import styled from 'styled-components';

import {ColorProps, color, space, SpaceProps, LayoutProps, layout, compose} from 'styled-system';

import {Theme} from '../../theme/index';

type ColorOptions = 'default' | 'disabled' | 'red' | 'blue' | 'green';

type ButtonProps = ColorProps &
  LayoutProps &
  SpaceProps & {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    wide?: boolean;
    red?: boolean;
    green?: boolean;
    blue?: boolean;
    onClick?: Function;
  };

type innerProps = ButtonProps & {theme: Theme};

const styledBox = (k: ColorOptions, p: innerProps) => {
  const {borderColor, backgroundColor, textColor, outlineColor} = p.theme;
  return `
  border-color: ${borderColor[k].default};
  background-color: ${backgroundColor[k].default};
  color: ${textColor[k].default};
  box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].default}`};
  * {
    fill:  ${textColor[k].active};
  }

  &:hover {
    border-color: ${borderColor[k].hover};
    background-color: ${backgroundColor[k].hover};
    color: ${textColor[k].hover};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].hover}`};
    * {
      fill:  ${textColor[k].active};
    }
  }

  &:focus {
    border-color: ${borderColor[k].focus};
    background-color: ${backgroundColor[k].focus};
    color: ${textColor[k].focus};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].focus}`};
    * {
      fill:  ${textColor[k].active};
    }
  }

  &:active {
    border-color: ${borderColor[k].active};
    background-color: ${backgroundColor[k].active};
    color: ${textColor[k].active};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].active}`};
    * {
      fill:  ${textColor[k].active};
    }
  }
  `;
};

const Button = styled.button<ButtonProps>`
  border: 0;
  outline: none;
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  line-height: 1.33334;

  font-size: ${p => p.theme.fontSizes[2]}px;

  height: ${p => {
    if (p.sm) return p.theme.sizes[5] + 'px';
    if (p.md) return p.theme.sizes[6] + 'px';
    return p.theme.sizes[7] + 'px';
  }};

  min-width: ${p => {
    if (p.sm) {
      if (p.wide) {
        return p.theme.sizes[8] + 'px';
      }
      return p.theme.sizes[5] + 'px';
    }
    if (p.md) {
      if (p.wide) {
        return p.theme.sizes[9] + 'px';
      }
      return p.theme.sizes[6] + 'px';
    }
    if (p.wide) {
      return p.theme.sizes[10] + 'px';
    }
    return p.theme.sizes[7] + 'px';
  }};

  padding: ${p => {
    if (p.sm) return 0 + ' ' + p.theme.space[1] + 'px';
    if (p.md) return 0 + ' ' + p.theme.space[2] + 'px';
    return 0 + ' ' + p.theme.space[3] + 'px';
  }};

  border-radius: ${p => p.theme.boxRadii.minor}px;
  border-width: 1px;
  border-style: solid;

  ${p => {
    if (p.disabled) return styledBox('disabled', p);
    if (p.red) return styledBox('red', p);
    if (p.blue) return styledBox('blue', p);
    if (p.green) return styledBox('green', p);
    return styledBox('default', p);
  }};

  &:disabled {
    cursor: not-allowed;
  }

  ${compose(color, layout, space)}
`;

export default Button;
