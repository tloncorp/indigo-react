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
    gray?: boolean;
  };

const Text = styled.p<Props>`
  color: ${p => {
    if (p.theme.dark) {
      if (p.gray) return p.theme.colors.grayMid;
      return p.theme.colors.white;
    }
    if (p.gray) return p.theme.colors.gray;
    return p.theme.colors.black;
  }};

  font-weight: ${p => {
    if (p.bold) return p.theme.fontWeights.bold;
    return p.theme.fontWeights.regular;
  }};

  font-family: ${p => {
    if (p.mono) return p.theme.fonts.mono;
    return p.theme.fonts.sans;
  }};

  ${compose(color, layout, space, typography)}
`;

Text.defaultProps = {
  lineHeight: 'regular',
  fontSize: 0,
  margin: 0,
  fontWeight: 400,
};

export default Text;
