import styled from 'styled-components';
import theme from '../../theme'
import xt from '../../extendedTheme'

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
  margin: 0;
  min-width: 0;

  border-color: ${theme.colors.gray[4]};
  border-width: 1px;
  border-style: solid;
  border-radius: ${xt.borderRadiusMid}px;

  margin: ${theme.space[2]}px;

  ${compose(
    border,
    flexbox,
    layout,
    position,
    space,
  )}
`;
