import styled from 'styled-components';

import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system';

type Props = ColorProps & LayoutProps & SpaceProps & TypographyProps & {};

const Subtitle = styled.h2<Props>`
  margin: 0;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: ${p => p.theme.lineHeights.short};
  color: ${p => p.theme.colors.gray};
  ${compose(color, layout, space, typography)}
`;

export default Subtitle;
