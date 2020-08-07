import styled from "styled-components";
import css from '@styled-system/css'

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
} from "styled-system";

type Props = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    collapse?: boolean;
  };

const Row = styled.div(({ collapse = false }:Props) => css({
  boxSizing: 'border-box',
  display: 'flex',
  width: collapse ? "auto" : "100%",
}), border, color, flexbox, layout, position, space);

export default Row;
export { Props };
