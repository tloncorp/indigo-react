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
      <Row mr='4' alignItems='center'>
          <Text fontSize='4' bold >Indigo</Text>
        </Row>
      <Button mr='7' narrow fontSize='4' onClick={actions.toggleMenu}>
        Menu
        <Icon ml='2' size='5' icon='ChevronSouth' />
      </Button>
      {
        pathname === '/'
          ? null
          : <Breadcrumbs pathname={pathname} />
      }
    </Row>

    <Row alignItems='center'>
      <Text mr='2' fontSize='4' gray>Theme:</Text>
      <Menu>
        <MenuButton narrow fontSize='4'>
          { data.themeTitle }
          <Icon ml='2' size='5' icon='ChevronSouth' />
        </MenuButton>
        <MenuList>
          <MenuItem
            onSelect={() => actions.setTheme(data.themeOptions.indigo.key)}
            fontSize='4'>
            {data.themeOptions.indigo.title}
          </MenuItem>
          <MenuItem
            onSelect={() => actions.setTheme(data.themeOptions.paper.key)}
            fontSize='4'>
            {data.themeOptions.paper.title}
          </MenuItem>
        </MenuList>
      </Menu>
    </Row>
  </Row>
  )
}

export default Header;
