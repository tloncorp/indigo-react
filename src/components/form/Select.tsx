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

type Props = LayoutProps &
  ColorProps &
  SpaceProps &
  TypographyProps & {
    error?: string;
    touched?: boolean;
    className?: string;
  };

const Select = styled.select<Props>`
  font-size: ${theme.fontSizes[0]}px;
  ${compose(color, layout, space, typography)}
`;

export default Select;
