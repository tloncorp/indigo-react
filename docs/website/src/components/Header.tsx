import * as React from 'react'
import { useLocation } from "react-router-dom";

import {
  Box,
  Row,
  Button,
  IconButton,
  Icon,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Img,
} from "@tlon/indigo-react";

import Breadcrumbs from "./Breadcrumbs";
import favicon from '../assets/Favicon.png'

const Header = ({ actions, data }) => {
  const pathname = useLocation().pathname
  return (
  <Row expand height='9' alignItems='center' justifyContent='space-between' px='7' backgroundColor='white'>
    
    <Row alignItems='center'>
      <Button mr='7' narrow onClick={actions.toggleMenu}>
        <Text bold >Indigo</Text>
        <Icon ml='2' icon='ChevronSouth' />
      </Button>
      {
        pathname === '/'
          ? null
          : <Breadcrumbs pathname={pathname} />
      }
    </Row>

    <Row alignItems='center'>
      <Text mr='2' gray>Theme:</Text>
      <Menu>
        <MenuButton narrow >
          { data.themeTitle }
          <Icon ml='2' icon='ChevronSouth' />
        </MenuButton>
        <MenuList>
          <MenuItem
            onSelect={() => actions.setTheme(data.themeOptions.default.key)}>
            {data.themeOptions.default.title}
          </MenuItem>
          <MenuItem
            onSelect={() => actions.setTheme(data.themeOptions.paper.key)}>
            {data.themeOptions.paper.title}
          </MenuItem>
        </MenuList>
      </Menu>
    </Row>
  </Row>
  )
}

export default Header;
