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

const Subtitle = styled.p<Props>`
  padding: ${theme.space[2]}px;
  font-size: ${theme.fontSizes[0]}px;
  line-height: ${theme.lineHeights.regular};
  color: ${theme.colors.gray[2]};
  ${compose(color, layout, space, typography)}
`;

export default Subtitle;
