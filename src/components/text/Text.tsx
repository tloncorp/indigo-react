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

const Text = styled.div<Props>`
  color: ${p => (p.gray ? p.theme.colors.gray5 : p.theme.colors.black)};

  font-weight: ${p => (p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular)};

  font-family: ${p => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};

  ${compose(color, layout, space, typography)};
`;

Text.defaultProps = {
  lineHeight: 'short',
  fontWeight: 400,
  fontSize: 2,
};

export default Text;
export {Props};
