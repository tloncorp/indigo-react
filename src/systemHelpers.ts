import {
  background,
  border,
  color,
  flexbox,
  grid,
  textAlign,
  opacity,
  layout,
  position,
  shadow,
  space,
  typography,
  system,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  OpacityProps,
  OverflowProps,
  TextAlignProps,
} from "styled-system";

export type SystemProps = {
  cursor?: string;
};

export type AllSystemProps = SystemProps &
  BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  OpacityProps &
  OverflowProps &
  TextAlignProps &
  TypographyProps;

export const allSystemStyle = [
  background,
  border,
  color,
  flexbox,
  grid,
  textAlign,
  opacity,
  layout,
  position,
  shadow,
  space,
  typography,
  system({
    cursor: true,
  }),
];

export type CommonStyleProps = SystemProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export const commonStyle = [border, color, flexbox, grid, layout, space, typography];

export type CosmeticProps = BackgroundProps &
  BorderProps &
  ColorProps &
  ShadowProps &
  OpacityProps;

export const cosmeticStyle = [
  background,
  border,
  color,
  opacity,
  shadow,
  system({
    cursor: true,
  }),
];

export type StructureProps = BorderProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  OverflowProps;

export const structureStyle = [
  border,
  flexbox,
  grid,
  layout,
  position,
  space,
  system({
    cursor: true,
  }),
];

export type TypographicProps = ColorProps & TextAlignProps & TypographyProps;

export const typographicStyle = [
  color,
  textAlign,
  typography,
  system({
    cursor: true,
  }),
];
