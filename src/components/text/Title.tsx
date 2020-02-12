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

const Title = styled.h1<Props>`
  margin: 0;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: ${p => p.theme.lineHeights.short};
  color: ${p => {
    if (p.theme.dark) return p.theme.colors.white;
    return p.theme.colors.black;
  }};
  font-weight: 600;
  ${compose(color, layout, space, typography)}
`;

export default Title;
