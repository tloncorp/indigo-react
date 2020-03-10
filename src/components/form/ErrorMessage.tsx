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
  ${compose(color, layout, space, typography)}
`;

ErrorMessage.defaultProps = {
  color: 'red1',
  fontSize: 2,
  lineHeight: 'short',
  marginTop: 1,
  minHeight: 4,
};

export default ErrorMessage;
