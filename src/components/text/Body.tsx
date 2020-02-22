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
  };

const Body = styled.p<Props>`
  color: ${p => {
    if (p.gray) return p.theme.colors.gray;
    return p.theme.colors.black;
  }};
  ${compose(color, layout, space, typography)};
`;

Body.defaultProps = {
  lineHeight: 'short',
  padding: 2,
  fontSize: 0,
  margin: 0,
  fontWeight: 400,
};

export default Body;
