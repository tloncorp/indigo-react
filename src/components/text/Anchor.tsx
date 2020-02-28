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
  display: flex;
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
  outline: none;

  border-radius: 4px;

  &:hover {
    color: ${p => p.theme.colors.black};
  }

  &:focus {
    background-color: ${p => p.theme.colors.gray0};
    box-shadow: ${p => `0px 0px 0px 2px ${p.theme.colors.gray0}`};
    color: ${p => p.theme.colors.black};
  }

  ${compose(color, layout, space, typography)};
`;

Anchor.defaultProps = {
  textDecoration: 'underline',
};

export default Anchor;
