import * as React from "react";
import styled from "styled-components";
import {
  MenuList as ReachMenuList,
  MenuListProps as ReachMenuListProps,
} from "@reach/menu-button";
import css, { SystemStyleObject } from "@styled-system/css";
import { CommonStyleProps, commonStyle } from "./systemHelpers";

export type MenuListProps = ReachMenuListProps & CommonStyleProps;

const style = () =>
  css({
    width: "200px",
    padding: 0,
    outline: "none",
    mt: "1px",
    py: 2,
    border: "none",
    backgroundColor: "white",
    borderRadius: 2,
  } as SystemStyleObject);

const MenuListWrapper = styled(ReachMenuList)<
  React.PropsWithChildren<MenuListProps>
>(style, ...commonStyle);

const MenuListTopCap = styled.div(() =>
  css({
    height: 2,
    width: "100%",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    border: "1px solid",
    borderBottom: "none",
    borderColor: "lightGray",
  } as SystemStyleObject)
);

const MenListBottomCap = styled.div(() =>
  css({
    height: 2,
    width: "100%",
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    border: "1px solid",
    borderTop: "none",
    borderColor: "lightGray",
  } as SystemStyleObject)
);

export const MenuList = ({ children }: MenuListProps) => (
  <MenuListWrapper>
    <MenuListTopCap />
    {children}
    <MenListBottomCap />
  </MenuListWrapper>
);
