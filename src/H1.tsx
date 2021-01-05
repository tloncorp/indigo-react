import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { AllSystemProps, allSystemStyle } from "./system/unions";

export type TextProps = AllSystemProps & {
  mono?: boolean;
};

const style = ({ mono = false }: TextProps) =>
  css({
    fontWeight: "bold",
    color: "black",
    fontFamily: mono ? "mono" : "sans",
    lineHeight: "short",
    // minHeight: "3",
    fontSize: 4,
  } as SystemStyleObject);

export const Text = styled.span<React.PropsWithChildren<TextProps>>(
  style,
  ...allSystemStyle
);

Text.displayName = "Text";
