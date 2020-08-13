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
  system,
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

type SystemProps = {
  cursor?: string;
};

export type BoxProps = SystemProps &
  BackgroundProps &
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
    typography,
    system({
      cursor: true,
    })
  )
);

Box.displayName = "Box";
