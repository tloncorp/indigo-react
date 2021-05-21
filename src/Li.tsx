import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type LiProps = AllSystemProps;

const style = ({ color, fontFamily, fontSize }: LiProps) =>
  css({
    "&::marker": {
      color: typeof color === "undefined" ? "black" : color,
      fontFamily: typeof fontFamily === "undefined" ? "sans" : fontFamily,
      fontSize: typeof fontSize === "undefined" ? 1 : fontSize
    },
  } as SystemStyleObject);

export const Li = styled.li<React.PropsWithChildren<LiProps>>(
  style, ...allSystemStyle
);

Li.displayName = "Li";
