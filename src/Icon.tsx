import * as React from "react";
import css, { SystemStyleObject } from "@styled-system/css";
import styled from "styled-components";
import {
  space,
  layout,
  position,
  border,
  color,
  flexbox,
  LayoutProps,
  SpaceProps,
  PositionProps,
  ColorProps,
  BorderProps,
  FlexboxProps,
} from "styled-system";
import iconIndex from "./iconIndex";

type IconIndex = typeof iconIndex;

export type IconProps = React.SVGProps<SVGElement> &
  ColorProps &
  PositionProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps &
  BorderProps;

const SVG: React.FunctionComponent<IconProps> = styled.svg(
  ({ color }: IconProps) =>
    css({
      "& > *": {
        fill: typeof color === "undefined" ? "inherit" : color || "black",
      },
      width: 3,
      height: 3,
    } as SystemStyleObject),
  space,
  color,
  layout,
  flexbox,
  border,
  position
);

export const Icon = ({
  icon,
  ...props
}: IconProps & { icon: keyof IconIndex }) => (
  <SVG {...props} viewBox={"0 0 16 16"}>
    {iconIndex[icon]()}
  </SVG>
);

Icon.displayName = "Icon";
