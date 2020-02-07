import React from 'react';
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

const __LabelCaption = (props: Props) => {
  return (
    <p className={props.className}>
      {props.touched && props.error ? props.error : ' '}
    </p>
  );
};

const LabelCaption = styled(__LabelCaption)<Props>`
  color: ${theme.colors.red[2]};
  margin-top: ${theme.space[1]}px;
  font-size: ${theme.fontSizes[0]}px;
  min-height: ${theme.lineHeights.regular * theme.fontSizes[0]}px;
  line-height: ${theme.lineHeights.regular};
  ${compose(color, layout, space, typography)}
`;

export default LabelCaption;
