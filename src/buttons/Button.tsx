import styled from "styled-components";
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
  pad,
  height,
  radius,
  container,
  button,
  concat,
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
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
    theme: Theme
  };


const Button = styled.button<Props>`
  /* Reset default button style */
  ${button.reset}

  /* Text */
  text-align: center;
  vertical-align: middle;
  line-height: 1.333333;
  font-weight: 500;

  /* Width */
  width: auto;

  /* Border */
  border: 1px solid;

  /* Tokens */
  ${({theme}:Props) => concat(container.center, height.base4, radius.base2, pad.baseX)(theme)}

  /* State */
  ${(p:Props) => {
    if (p.destructive && p.disabled && p.primary) return button.color.destructivePrimaryDisabled(p.theme)
    if (p.primary && p.disabled) return button.color.primaryDisabled(p.theme)
    if (p.destructive && p.disabled) return button.color.destructiveDisabled(p.theme)
    if (p.destructive && p.primary) return button.color.destructivePrimary(p.theme)
    if (p.destructive) return button.color.destructive(p.theme)
    if (p.primary) return button.color.primary(p.theme)
    if (p.disabled) return button.color.defaultDisabled(p.theme)
    return button.color.default(p.theme)
  }}

  ${compose(space, typography, color, layout, flexbox, border)}
`;

Button.defaultProps = {
  disabled: false,
  destructive: false,
  primary: false
};

export default Button;
