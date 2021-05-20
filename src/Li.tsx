import styled from "styled-components";
import { compose } from "styled-system";
import css, { SystemStyleObject } from "@styled-system/css";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type LiProps = AllSystemProps;

const style = ({ color, fontFamily }: LiProps) =>
  css({
    "& > :marker": {
      color: typeof color === "undefined" ? "white" : color,
      fontFamily: typeof fontFamily === "undefined" ? "sans" : fontFamily,
    },
  } as SystemStyleObject);

export const Li = styled.li<React.PropsWithChildren<LiProps>>(
  compose(style, ...allSystemStyle)
);

Li.displayName = "Li";
