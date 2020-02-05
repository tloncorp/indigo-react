import styled from 'styled-components'
import {
  space,  SpaceProps,
  typography, TypographyProps,
  color, ColorProps,
  border, BorderProps,
  shadow, ShadowProps,
  layout, LayoutProps,
  compose
} from 'styled-system'

type Props =
  BorderProps &
  ColorProps &
  LayoutProps &
  ShadowProps &
  SpaceProps &
  TypographyProps &
  {}


const Span = styled.span<Props>`
  ${compose(space, color, typography, shadow, border, layout)}
`;

export default Span;
