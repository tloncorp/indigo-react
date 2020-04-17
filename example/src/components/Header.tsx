import * as React from 'react'

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
} from "indigo-react";

const Header = ({ actions, data }) => (
  <Row expand height='9' alignItems='center' justifyContent='space-between' px='7'>

    <Row alignItems='center'>
      <Button mr='7' narrow fontSize='4'>
        Menu
        <Icon ml='2' size='5' icon='ChevronSouth' />
      </Button>
      <Button narrow>Home</Button>
    </Row>

    <Row alignItems='center'>
      <Text mr='2' fontSize='4' gray>Theme:</Text>
      <Menu>
        <MenuButton narrow fontSize='4'>
          {data.themeName}
          <Icon ml='2' size='5' icon='ChevronSouth' />
        </MenuButton>
        <MenuList>
          <MenuItem onSelect={() => actions.setTheme('dark')} fontSize='4'>Dark</MenuItem>
          <MenuItem onSelect={() => actions.setTheme('darkAlt')} fontSize='4'>Dark Alt</MenuItem>
          <MenuItem onSelect={() => actions.setTheme('light')} fontSize='4'>Light</MenuItem>
        </MenuList>
      </Menu>
    </Row>

  </Row>
)

export default Header;
