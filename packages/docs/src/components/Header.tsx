import * as React from 'react'

import {
  Box,
  Row,

  Icon,
  Text,
} from "@tlon/indigo-core";

import {
  Button,
  IconButton,
} from '@tlon/indigo-buttons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@tlon/indigo-controls";

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
          { data.themeName }
          <Icon ml='2' size='5' icon='ChevronSouth' />
        </MenuButton>
        <MenuList>
          <MenuItem
            onSelect={() => actions.setTheme('dark')}
            fontSize='4'>
            Dark
          </MenuItem>
          <MenuItem
            onSelect={() => actions.setTheme('inverted')}
            fontSize='4'>
            Inverted
          </MenuItem>
          <MenuItem
            onSelect={() => actions.setTheme('light')}
            fontSize='4'>
            Light
          </MenuItem>
          <MenuItem
            onSelect={() => actions.setTheme('paperLight')}
            fontSize='4'>
            Paper Light
          </MenuItem>
          <MenuItem
            onSelect={() => actions.setTheme('paperDark')}
            fontSize='4'>
            Paper Dark
          </MenuItem>
        </MenuList>
      </Menu>
    </Row>
  </Row>
)

export default Header;
