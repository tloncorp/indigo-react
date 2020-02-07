import styled from 'styled-components';

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
  compose,
} from 'styled-system';

type Props = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {};

const Button = styled.button<Props>`
  ${compose(space, layout, color, border, flexbox, typography)};
  border: 0;
  outline: none;
  cursor: pointer;
`;

export default Button;
