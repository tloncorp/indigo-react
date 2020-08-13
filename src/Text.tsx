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
  BorderProps,
  border,
  FlexboxProps,
  flexbox,
} from "styled-system";

export type TextProps = React.HTMLProps<HTMLParagraphElement> &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  TypographyProps & {
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

const styleProps = [border, color, flexbox, layout, space, typography];

export const Text = styled.p<React.PropsWithChildren<TextProps>>(
  style,
  ...styleProps
);

Text.displayName = "Text";
