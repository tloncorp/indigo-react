import styled from 'styled-components'
import theme from '../../theme'

import {
  color, ColorProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

type Props = ColorProps & LayoutProps & SpaceProps & TypographyProps & {}

const Title = styled.h1<Props>`
  padding: ${theme.space[2]}px;
  font-size: ${theme.fontSizes[0]}px;
  line-height: ${theme.lineHeights.regular};
  ${compose(color, layout, space, typography)}
`;

export default Title;
