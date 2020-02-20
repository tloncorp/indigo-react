// import React from 'react';
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

type Props = LayoutProps & ColorProps & SpaceProps & TypographyProps;

const ErrorMessage = styled.p<Props>`
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights.regular};
  margin-top: ${p => p.theme.space[1]}px;
  min-height: ${p => p.theme.sizes[4]}px;
  ${compose(color, layout, space, typography)}
`;

export default ErrorMessage;

// min-height: ${theme.lineHeights.regular * theme.fontSizes[0]}px;
