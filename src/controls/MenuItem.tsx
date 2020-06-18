import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";
import { MenuItem as _MenuItem, MenuItemProps } from "@reach/menu-button";

type Props = MenuItemProps & TypographyProps;

const MenuItem = styled(_MenuItem)<Props>`
  cursor: pointer;s
  display: block;
  font-family: inherit;
  text-decoration: initial;

  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[4]}px;

  background-color: color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};

  font-family: ${p => p.theme.fonts.sans};

  &:hover {
    background-color: ${p => p.theme.colors.highlight};
    color: ${p => p.theme.colors.white};
    outline: none;
  }

  ${typography}
`;

MenuItem.defaultProps = {
  fontSize: 0
};

export default MenuItem;
