import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { AllSystemProps, allSystemStyle } from "./system/unions";

export type H2Props = AllSystemProps & {
  mono?: boolean;
};

const style = ({ mono = false }: H2Props) =>
  css({
    fontWeight: "bold",
    color: "black",
    fontFamily: mono ? "mono" : "sans",
    lineHeight: "min",
    fontSize: 3,
  } as SystemStyleObject);

export const H2 = styled.span<React.PropsWithChildren<H2Props>>(
  style,
  ...allSystemStyle
);

H2.displayName = "H2";
