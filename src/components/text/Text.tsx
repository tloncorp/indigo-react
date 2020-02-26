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
    fs?: number | string;
  };

const Text = styled.div<Props>`
  color: ${p => (p.gray ? p.theme.colors.gray5 : p.theme.colors.black)};

  font-weight: ${p =>
    p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular};

  font-family: ${p => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};

  ${system({
    fs: {
      property: 'fontSize',
      scale: 'fontSizes',
    },
  })}

  ${compose(color, layout, space, typography)};
`;

export default Text;
