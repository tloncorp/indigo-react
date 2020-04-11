import styled from 'styled-components';
import {space, SpaceProps} from 'styled-system';
import {Theme} from '../../theme/index';

type ColorOptions = 'default' | 'disabled' | 'caution' | 'primary';

type Props = SpaceProps & {
  sm?: boolean;
  wide?: boolean;
  caution?: boolean;
  primary?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
};

type innerProps = Props & {theme: Theme};

const styledBox = (k: ColorOptions, p: innerProps) => {
  const {borderColor, backgroundColor, textColor, outlineColor} = p.theme;
  return `
  border-color: ${borderColor[k].default};
  background-color: ${backgroundColor[k].default};
  color: ${textColor[k].default};
  box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].default}`};

  &:hover {
    border-color: ${borderColor[k].hover};
    background-color: ${backgroundColor[k].hover};
    color: ${textColor[k].hover};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].hover}`};
  }

  &:focus {
    border-color: ${borderColor[k].focus};
    background-color: ${backgroundColor[k].focus};
    color: ${textColor[k].focus};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].focus}`};
  }

  &:active {
    border-color: ${borderColor[k].active};
    background-color: ${backgroundColor[k].active};
    color: ${textColor[k].active};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].active}`};
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

  min-width: ${p => p.theme.sizes[10]}px;

  padding: ${p => {
    if (p.sm) return 0 + ' ' + p.theme.space[2] + 'px';
    return 0 + ' ' + p.theme.space[3] + 'px';
  }};

  border-radius: ${p => p.theme.boxRadii.minor}px;
  border-width: 1px;
  border-style: solid;

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

export default Button;
