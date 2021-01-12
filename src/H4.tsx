import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { AllSystemProps, allSystemStyle } from "./system/unions";

export type H4Props = AllSystemProps & {
  mono?: boolean;
};

const style = ({ mono = false }: H4Props) =>
  css({
    fontWeight: "bold",
    color: "black",
    fontFamily: mono ? "mono" : "sans",
    lineHeight: "short",
    fontSize: 1,
  } as SystemStyleObject);

export const H4 = styled.span<React.PropsWithChildren<H4Props>>(
  style,
  ...allSystemStyle
);

H4.displayName = "H4";
