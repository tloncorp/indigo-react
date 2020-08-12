import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
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
  ResponsiveValue,
  ThemeValue,
  RequiredTheme,
} from "styled-system";

export type InlineProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    pitch?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
  };

const style = () =>
  css({
    display: "inline",
  } as SystemStyleObject);

const styleProps = [border, color, flexbox, layout, position, space];

const Inline = styled.div<React.PropsWithChildren<InlineProps>>(
  style,
  ...styleProps
);

Inline.displayName = "Inline";
export default Inline;
