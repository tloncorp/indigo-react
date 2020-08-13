import styled from "styled-components";
import {
  background,
  border,
  color,
  flexbox,
  textAlign,
  opacity,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  OpacityProps,
  TextAlignProps,
} from "styled-system";

export type BoxProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  OpacityProps &
  TextAlignProps &
  TypographyProps;

export const Box = styled.div<React.PropsWithChildren<BoxProps>>(
  {
    position: "relative",
  },
  compose(
    space,
    layout,
    color,
    border,
    position,
    shadow,
    flexbox,
    textAlign,
    background,
    opacity,
    typography
  )
);

Box.displayName = "Box";
