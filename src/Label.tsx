import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
} from "styled-system";

export type LabelProps = BorderProps &
  FlexboxProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
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

const styleProps = [border, color, flexbox, layout, space, typography];

export const Label = styled.label<React.PropsWithChildren<LabelProps>>(
  style,
  ...styleProps
);

Label.displayName = "Label";
