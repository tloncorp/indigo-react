import * as React from 'react';
import styled from 'styled-components';
import {space, SpaceProps} from 'styled-system';
import {Theme} from '../../theme/index';
import Icon from '../icon/Icon';

type ColorOptions = 'default' | 'disabled' | 'caution' | 'primary';

type Props = SpaceProps & {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  icon?: string;
  caution?: boolean;
  primary?: boolean;
  disabled?: boolean;
  onClick?: Function;
};

type innerProps = Props & {theme: Theme};

const styledBox = (k: ColorOptions, p: innerProps) => {
  const {backgroundColor, textColor, outlineColor} = p.theme;
  return `

  background-color: ${backgroundColor[k].default};
  color: ${textColor[k].default};
  box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].default}`};
  * {
    fill:  ${textColor[k].active};
  }

  &:hover {
    background-color: ${backgroundColor[k].hover};
    color: ${textColor[k].hover};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].hover}`};
    * {
      fill:  ${textColor[k].active};
    }
  }

  &:focus {
    background-color: ${backgroundColor[k].focus};
    color: ${textColor[k].focus};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].focus}`};
    * {
      fill:  ${textColor[k].active};
    }
  }

  &:active {
    background-color: ${backgroundColor[k].active};
    color: ${textColor[k].active};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].active}`};
    * {
      fill:  ${textColor[k].active};
    }
  }
  `;
};

const Button = styled.button<Props>`
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
    if (p.sm) return p.theme.sizes[6] + 'px';
    return p.theme.sizes[7] + 'px';
  }};

  width: ${p => {
    if (p.sm) return p.theme.sizes[6] + 'px';
    return p.theme.sizes[7] + 'px';
  }};

  border-radius: ${p => p.theme.boxRadii.minor}px;
  border-width: 0px;

  ${p => {
    if (p.disabled) return styledBox('disabled', p);
    if (p.caution) return styledBox('caution', p);
    if (p.primary) return styledBox('primary', p);
    return styledBox('default', p);
  }};

  &:disabled {
    cursor: not-allowed;
  }

  ${space}
`;

const IconButton = ({icon, ...props}: Props) => (
  // @ts-ignore
  <Button {...props}>
    <Icon icon={icon} />
  </Button>
);

IconButton.defaultProps = {
  onClick: () => {},
};

export default IconButton;
