import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { AllSystemProps, allSystemStyle } from "../systemHelpers";

export type TextProps = AllSystemProps & {
  gray?: boolean;
  bold?: boolean;
  mono?: boolean;
};

const style = ({ gray = false, bold = false, mono = false }: TextProps) =>
  css({
    fontWeight: bold ? "bold" : "regular",
    color: gray ? "gray" : "black",
    fontFamily: mono ? "mono" : "sans",
    display: "inline",
    lineHeight: "short",
    minHeight: "3",
    fontSize: 0,
  } as SystemStyleObject);

export const Text = styled.p<React.PropsWithChildren<TextProps>>(
  style,
  ...allSystemStyle
);

Text.displayName = "Text";
