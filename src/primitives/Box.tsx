import styled from 'styled-components';

import {
  background, BackgroundProps,
  border, BorderProps,
  color, ColorProps,
  flexbox, FlexboxProps,
  grid, GridProps,
  layout, LayoutProps,
  position, PositionProps,
  shadow, ShadowProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

interface Props extends BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps {}

export default styled.div<Props>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  ${compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )}
`;
