import styled from "styled-components";
import { MenuList  as _MenuList, MenuListProps } from "@reach/menu-button";

type Props = MenuListProps

const MenuList = styled(_MenuList)<Props>`
  width: 200px;
  padding: 0;
  outline: none;
  margin-top: 1px;
  padding-top: 8px;
  padding-bottom: 8px;

  border: 1px solid ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii[1]}px;
`;

export default MenuList;
