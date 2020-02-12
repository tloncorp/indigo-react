import styled from 'styled-components';

import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  compose,
} from 'styled-system';

type Props = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {};

export default styled.div<Props>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: flex;
  ${compose(border, color, flexbox, layout, position, space)}
`;
