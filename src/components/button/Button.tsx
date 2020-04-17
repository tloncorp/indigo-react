import styled from 'styled-components';
import {space, SpaceProps, typography, TypographyProps} from 'styled-system';
import {Theme} from '../../theme/index';

type Props = SpaceProps &
  TypographyProps & {
    sm?: boolean;
    wide?: boolean;
    narrow?: boolean;
    border?: boolean;
    caution?: boolean;
    primary?: boolean;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
  };

type BoxInput = Props & {theme: Theme};

const defaultBox = (p: BoxInput) => `
  border-color: ${p.border ? p.theme.colors.black : p.theme.colors.white};
  background-color: ${p.border ? p.theme.colors.white : p.theme.colors.white};
  color: ${p.theme.colors.black};

  &:hover {
    border-color: ${p.border ? p.theme.colors.gray1 : p.theme.colors.white};
    background-color: ${p.border ? p.theme.colors.white : p.theme.colors.gray0};
    color: ${p.theme.colors.black};
  }

  &:focus {
    border-color: ${p.theme.colors.blue1};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.black};
  }

  &:active {
    border-color: ${p.theme.colors.blue1};
    background-color: ${p.theme.colors.blue1};
    color: ${p.theme.colors.white};
    * {
      fill: ${p.theme.colors.white};
    }
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${p.border ? p.theme.colors.gray2 : p.theme.colors.white};
    background-color: ${p.theme.colors.gray0};
    color: ${p.theme.colors.gray5};
    * {
      fill: ${p.theme.colors.gray5};
    }
  }
`;

const cautionBox = (p: BoxInput) => `
  &:hover {
    border-color: ${p.border ? p.theme.colors.gray1 : p.theme.colors.white};
    background-color: ${p.border ? p.theme.colors.gray1 : p.theme.colors.gray0};
    color: ${p.theme.colors.black};
  }

  &:focus {
    border-color: ${p.theme.colors.blue1};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.black};
  }

  &:active {
    border-color: ${p.theme.colors.blue1};
    background-color: ${p.theme.colors.blue1};
    color: ${p.theme.colors.white};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${p.border ? p.theme.colors.gray2 : p.theme.colors.white};
    background-color: ${p.theme.colors.gray0};
    color: ${p.theme.colors.gray5};
  }
`;

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

  min-width: ${p => (p.narrow ? 0 : p.theme.sizes[10])}px;

  padding: ${p => {
    if (p.sm) return `${p.theme.space[1]}px ${p.theme.space[2]}px`;
    return `${p.theme.space[2]}px ${p.theme.space[3]}px`;
  }};

  border-radius: ${p => p.theme.boxRadii.mid}px;
  border-width: 1px;
  border-style: solid;

  border-color: ${p => (p.border ? p.theme.gray1 : p.theme.white)};
  background-color: ${p => p.theme.white};
  color: ${p => p.theme.black};

  ${p => (p.caution ? cautionBox(p) : defaultBox(p))}

  ${space}
  ${typography}
`;

Button.defaultProps = {
  fontSize: 2,
};

export default Button;
export {Props, BoxInput};
