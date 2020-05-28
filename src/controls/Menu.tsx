import styled from "styled-components";
import { Menu as _Menu, MenuProps } from "@reach/menu-button";

type Props = MenuProps

const Menu = styled(_Menu)<Props>`
  display: block;
  position: absolute;
  font-family: "Inter UI";
`;

export default Menu;
