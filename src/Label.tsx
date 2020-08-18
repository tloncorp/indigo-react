import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { commonStyle, CommonStyleProps } from "./systemHelpers";

export type LabelProps = CommonStyleProps & {
  gray?: boolean;
  bold?: boolean;
  mono?: boolean;
};

const style = ({ gray = false, bold = false, mono = false }: LabelProps) =>
  css({
    fontWeight: bold ? "bold" : "regular",
    color: gray ? "gray" : "black",
    fontFamily: mono ? "mono" : "sans",
    display: "block",
    lineHeight: "short",
    fontSize: 0,
    pointerEvents: "none",
    userSelect: "none",
    verticalAlign: "middle",
    width: "100%",
  } as SystemStyleObject);

export const Label = styled.label<React.PropsWithChildren<LabelProps>>(
  style,
  ...commonStyle
);

Label.displayName = "Label";
