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
  system,
} from 'styled-system';

type Props = ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    gray?: boolean;
    bold?: boolean;
    mono?: boolean;
    textDecoration?: string;
  };

const Anchor = styled.a<Props>`
  cursor: pointer;
  &:visited {
    color: ${p => (p.gray ? p.theme.colors.gray5 : p.theme.colors.black)};
  }
  color: ${p => (p.gray ? p.theme.colors.gray5 : p.theme.colors.black)};
  font-weight: ${p => (p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular)};
  font-family: ${p => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};
  ${system({
    textDecoration: {
      property: 'textDecoration',
    },
  })}

  ${compose(color, layout, space, typography)};
`;

Anchor.defaultProps = {
  textDecoration: 'underline',
};

export default Anchor;
