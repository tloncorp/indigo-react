import styled from "styled-components";
import {
  MenuItem as ReachMenuItem,
  MenuItemProps as ReachMenuItemProps,
} from "@reach/menu-button";
import css, { SystemStyleObject } from "@styled-system/css";
import { CommonStyleProps, commonStyle } from "./system/unions";

export type MenuItemProps = ReachMenuItemProps & CommonStyleProps;

const style = () =>
  css({
    cursor: "pointer",
    textDecoration: "initial",
    display: "flex",
    alignItems: "center",
    px: 4,
    height: "24px",
    backgroundColor: "white",
    borderLeft: "1px solid",
    borderLeftColor: "lightGray",
    borderRight: "1px solid",
    borderRightColor: "lightGray",
    color: "black",
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      borderLeftColor: "blue",
      borderRightColor: "blue",
      outline: "none",
    },
  } as SystemStyleObject);

export const MenuItem = styled(ReachMenuItem)<
  React.PropsWithChildren<MenuItemProps>
>(style, ...commonStyle);

export default MenuItem;
