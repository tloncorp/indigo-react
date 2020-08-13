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

export type RowProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    pitch?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
  };

const style = ({ pitch }: RowProps) =>
  css({
    display: "flex",
    "& > *": typeof pitch === "undefined" ? {} : { marginLeft: pitch },
    "& :first-child": typeof pitch === "undefined" ? {} : { marginLeft: 0 },
  } as SystemStyleObject);

const styleProps = [border, color, flexbox, layout, position, space];

export const Row = styled.div<React.PropsWithChildren<RowProps>>(
  style,
  ...styleProps
);

Row.displayName = "Row";
