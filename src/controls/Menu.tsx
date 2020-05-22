import styled from "styled-components";
import { Menu } from "@reach/menu-button";

type Props = {
  children: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
}

const StyledMenu = styled(Menu)<Props>`
  display: block;
  position: absolute;
  font-family: "Inter UI";
`;

export default StyledMenu;
