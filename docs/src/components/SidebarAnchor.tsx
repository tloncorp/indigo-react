import { Link } from "react-router-dom";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { commonStyle, CommonStyleProps } from "local-indigo-react";

export type SidebarAnchorProps = CommonStyleProps & {
  disabled?: boolean;
  destructive?: boolean;
};
const style = () =>
  css({
    width: "auto",
    border: "none",
    overflow: "hidden",
    minHeight: 5,
    display: "flex",
    alignItems: "center",
    fontFamily: "sans",
    color: "gray",
    fontSize: 0,
    borderRight: "1px solid",
    borderRightColor: "lightGray",
    textDecoration: "none",
  } as SystemStyleObject);

export const SidebarAnchor = styled.a<
  React.PropsWithChildren<SidebarAnchorProps>
>(style, ...commonStyle);
