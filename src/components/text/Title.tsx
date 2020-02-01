import styled from 'styled-components'

import {
  color, ColorProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps, TypographyProps {}

const Title = styled.p<Props>`
  margin: ${props => props.theme.space[2]}
  font-size: ${props => props.theme.fontSizes[0]},
  line-height: ${props => props.theme.lineHeights.regular},
  ${compose(color, layout, space, typography)}
`;

export default Title;
