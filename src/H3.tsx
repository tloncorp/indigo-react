import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { AllSystemProps, allSystemStyle } from "./system/unions";

export type H3Props = AllSystemProps & {
  mono?: boolean;
};

const style = ({ mono = false }: H3Props) =>
  css({
    fontWeight: "bold",
    color: "black",
    fontFamily: mono ? "mono" : "sans",
    lineHeight: "short",
    // minHeight: "3",
    fontSize: 2,
  } as SystemStyleObject);

export const H3 = styled.span<React.PropsWithChildren<H3Props>>(
  style,
  ...allSystemStyle
);

H3.displayName = "H3";
