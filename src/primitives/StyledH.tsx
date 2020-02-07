import styled from 'styled-components';

import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system';

type Props = ColorProps & SpaceProps & TypographyProps & {};

const defaults = {
  fontFamily: 'sans',
  fontWeight: 400,
};

export const H1 = styled.h1<Props>`
  ${compose(color, typography, space)}
`;

H1.defaultProps = {
  ...defaults,
  fontSize: 7,
  lineHeight: 'short',
};

export const H2 = styled.h2<Props>`
  ${compose(color, typography, space)}
`;

H2.defaultProps = {
  ...defaults,

  fontSize: 6,
  lineHeight: 'regular',
};

export const H3 = styled.h3<Props>`
  ${compose(color, typography, space)}
`;

H3.defaultProps = {
  ...defaults,
  fontSize: 5,
  lineHeight: 'short',
};

export const H4 = styled.h4<Props>`
  ${compose(color, typography, space)}
`;

H4.defaultProps = {
  ...defaults,
  fontSize: 4,
  lineHeight: 'tall',
};

export const H5 = styled.h5<Props>`
  ${compose(color, typography, space)}
`;

H5.defaultProps = {
  ...defaults,
  fontSize: 2,
  lineHeight: 'regular',
};

export const H6 = styled.h6<Props>`
  ${compose(color, typography, space)}
`;

H6.defaultProps = {
  ...defaults,
  fontSize: 0,
  lineHeight: 'short',
};
