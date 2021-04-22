import * as React from "react";
import css, { SystemStyleObject } from "@styled-system/css";
import styled from "styled-components";
import { iconIndex } from "./iconIndex";
import { commonStyle, CommonStyleProps } from "./system/unions";

export type IconIndex = typeof iconIndex;

export type IconProps = React.SVGProps<SVGElement> &
  CommonStyleProps & { stroke?: string };

const SVG: React.FunctionComponent<IconProps> = styled.svg(
  ({ color }: IconProps) =>
    css({
      "& > *": {
        fill: typeof color === "undefined" ? "inherit" : color || "black",
        // REMOVE
        // stroke: typeof stroke === "undefined" ? "inherit" : stroke || "black",
      },
      width: 3,
      height: 3,
      flexShrink: 0,
    } as SystemStyleObject),
  ...commonStyle
);

export const Icon = ({
  icon,
  ...props
}: IconProps & { icon: keyof IconIndex }) => {
  const InnerIcon = iconIndex[icon] || iconIndex.NullIcon;

  return (
    <SVG color="black" {...props} viewBox={"0 0 16 16"}>
      <InnerIcon />
    </SVG>
  );
};

Icon.displayName = "Icon";
