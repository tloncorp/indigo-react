import styled from "styled-components";
import {
  Menu as ReachMenu,
  MenuProps as ReachMenuProps,
} from "@reach/menu-button";

export type MenuProps = ReachMenuProps;

export const Menu = styled(ReachMenu)<MenuProps>`
  display: block;
  position: absolute;
`;
