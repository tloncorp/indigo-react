import styled from 'styled-components'
import {
  background, BackgroundProps,
  border, BorderProps,
  color, ColorProps,
  flexbox, FlexProps,
  grid, GridProps,
  layout, LayoutProps,
  position, PositionProps,
  shadow, ShadowProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

interface Props extends BackgroundProps, BorderProps, ColorProps, FlexProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps {}

export default styled.div<Props>`
  box-sizing: border-box;
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
