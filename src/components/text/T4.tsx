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
    gray?: boolean;
    bold?: boolean;
    mono?: boolean;
  };

const T4 = styled.h4<Props>`
  color: ${p => {
    if (p.gray) return p.theme.colors.gray;
    return p.theme.colors.black;
  }};
  font-weight: ${p => {
    if (p.bold) return p.theme.fontWeights.bold;
    return p.theme.fontWeights.regular;
  }};
  ${compose(color, layout, space, typography)};
`;

T4.defaultProps = {
  lineHeight: 'short',
  fontSize: 1,
  margin: 0,
  fontWeight: 400,
};

export default T4;
