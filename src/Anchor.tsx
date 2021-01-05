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

export type AnchorProps = BorderProps &
  FlexboxProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    gray?: boolean;
    bold?: boolean;
    mono?: boolean;
    underline?: boolean;
    textDecoration?: string;
  };

const style = ({
  color,
  gray = false,
  bold = false,
  mono = false,
  underline = true,
}: AnchorProps) =>
  css({
    cursor: "pointer",
    display: "inline-block",
    textDecoration: underline ? "underline" : "none",
    fontWeight: bold ? "bold" : "regular",
    color: gray ? "gray" : "black",
    fontFamily: mono ? "mono" : "sans",
    lineHeight: "short",
    fontSize: 1,
    "&:visited": {
      color: color || gray ? "gray" : "black",
    },
  } as SystemStyleObject);

const styleProps = [border, color, flexbox, layout, space, typography];

export const Anchor = styled.a<React.PropsWithChildren<AnchorProps>>(
  style,
  ...styleProps
);

export const asAnchor = (component: React.FC) =>
  styled(component)<React.PropsWithChildren<AnchorProps>>(style, ...styleProps);

Anchor.displayName = "Anchor";
