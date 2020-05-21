import styled from 'styled-components';

import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

type Props = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps & {};

const Box = styled.div<Props>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  ${compose(background, border, color, flexbox, grid, layout, position, shadow, space, typography)}
`;

export default Box
