import styled from "styled-components";
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
} from "styled-system";

export type CenterProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps;

const Center = styled.div<CenterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${compose(border, color, flexbox, layout, position, space)}
`;
Center.displayName = "Center";
export default Center;
