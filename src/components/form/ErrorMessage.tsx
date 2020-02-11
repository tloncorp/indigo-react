// import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
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
  color: ${theme.colors.red[2]};
  font-size: ${theme.fontSizes[0]}px;
  line-height: ${theme.lineHeights.regular};
  margin-top: ${theme.space[1]}px;
  min-height: ${theme.sizes[4]}px;
  ${compose(color, layout, space, typography)}
`;

export default ErrorMessage;

// min-height: ${theme.lineHeights.regular * theme.fontSizes[0]}px;
