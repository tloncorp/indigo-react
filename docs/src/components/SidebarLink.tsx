import { Link } from "react-router-dom";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { commonStyle, CommonStyleProps } from "local-indigo-react";

export type SidebarLinkProps = CommonStyleProps & {
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
    textDecoration: "none",
    borderRight: "1px solid",
    borderRightColor: "lightGray",
    "&:hover": {
      backgroundColor: "blue",
      borderRightColor: "blue",
      color: "white",
    },
  } as SystemStyleObject);

export const SidebarLink = styled(Link)<
  React.PropsWithChildren<SidebarLinkProps>
>(style, ...commonStyle);
