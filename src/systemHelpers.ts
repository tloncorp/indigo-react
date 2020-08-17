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
  LayoutProps &
  SpaceProps &
  TypographyProps;

export const commonStyle = [border, color, flexbox, layout, space, typography];

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

export type StructuralProps = BorderProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  OverflowProps;

export const structureStyle = [
  border,
  flexbox,
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
