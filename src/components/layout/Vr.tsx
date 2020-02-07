import styled from 'styled-components';
import theme from '../../theme';

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
} from 'styled-system';

type Props = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {};

export default styled.div<Props>`
  box-sizing: border-box;
  
  width: 0px;
  height: 100%

  border-left-color: ${theme.colors.gray[4]};
  border-left-width: 1px;
  border-left-style: solid;

  ${compose(border, flexbox, layout, position, space)}
`;
