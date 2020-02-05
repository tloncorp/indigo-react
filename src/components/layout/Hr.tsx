import styled from 'styled-components';
import theme from '../../theme'

import {
  border,
  flexbox,
  layout,
  position,
  space,
  compose,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system'

type Props =
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  {}

export default styled.div<Props>`
  box-sizing: border-box;

  height: 0px;
  width: 100%

  border-top-color: ${theme.colors.gray[4]};
  border-top-width: 1px;
  border-top-style: solid;

  ${compose(
    border,
    flexbox,
    layout,
    position,
    space,
  )}
`;
