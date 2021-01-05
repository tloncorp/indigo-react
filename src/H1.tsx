import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { AllSystemProps, allSystemStyle } from "./system/unions";

export type H1Props = AllSystemProps & {
  mono?: boolean;
};

const style = ({ mono = false }: H1Props) =>
  css({
    fontWeight: "bold",
    color: "black",
    fontFamily: mono ? "mono" : "sans",
    lineHeight: "short",
    // minHeight: "3",
    fontSize: 4,
  } as SystemStyleObject);

export const H1 = styled.span<React.PropsWithChildren<H1Props>>(
  style,
  ...allSystemStyle
);

H1.displayName = "H1";
