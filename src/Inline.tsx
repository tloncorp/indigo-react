import * as React from "react";
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
} from "styled-system";

export type InlineProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps;

const styleProps = [border, color, flexbox, layout, position, space];

export const Inline = styled.div<React.PropsWithChildren<InlineProps>>(
  {
    display: "inline-block",
    position: "relative",
  },
  ...styleProps
);

Inline.displayName = "Inline";
