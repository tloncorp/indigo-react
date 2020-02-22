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

const T3 = styled.h3<Props>`
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

T3.defaultProps = {
  lineHeight: 'short',
  fontSize: 2,
  margin: 0,
  fontWeight: 400,
};

export default T3;
