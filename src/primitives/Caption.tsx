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

type Props = ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    bold?: boolean;
    mono?: boolean;
    thin?: boolean;
  };

const Caption = styled.p<Props>`
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.regular};

  color: ${p => {
    if (typeof p.color === 'undefined') {
      if (p.theme.dark) return p.theme.colors.gray;
      return p.theme.colors.gray;
    }
  }};

  font-weight: ${p => {
    if (p.thin) return p.theme.fontWeights.thin;
    if (p.bold) return p.theme.fontWeights.bold;
    return p.theme.fontWeights.regular;
  }};

  font-family: ${p => {
    if (p.mono) return p.theme.fonts.mono;
    return p.theme.fonts.sans;
  }};

  ${compose(color, layout, space, typography)}
`;

export default Caption;
