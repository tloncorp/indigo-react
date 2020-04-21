import * as React from 'react'

import {
  Box,
  Row,
  Col,
  Button,
  IconButton,
  Icon,
  Text,
  Img,
  Rule,
} from "indigo-react";
import LinkList from './LinkList'
import EightUp from './EightUp'
import icon from '../assets/icon.png'

const Footer = (props) => (
  <Col expand>
    <Row wide justifyContent='space-between' p='7'>

      <Row alignItems='center'>
        <Img width='7' src={icon} />
        <Text fontSize='4' bold pl='4'>Indigo</Text>
      </Row>

      <Row alignItems='center'>
        <Text mr='2' gray>Theme:</Text>
        <Button narrow>
          Light
          <Icon ml='2' icon='ChevronSouth' />
        </Button>
      </Row>

    </Row>

    <EightUp>
      <LinkList
        title='Design Guidance'
        items={[
          {title:'Design Language', to:'/'},
          {title:'Use Interface Guidelines', to:'/'},
        ]} />
      <LinkList
        title='Figma Component Library'
        items={[
          {title:'Figma Document', to:'/'},
        ]} />
      <LinkList
        title='React Component Library'
        items={[
          {title:'Component Catalog', to:'/'},
          {title:'Source Code', to:'/'},
        ]} />
      <LinkList
        title='Design Tokens'
        items={[
          {title:'Source Code', to:'/'},
        ]} />
    </EightUp>
    <Rule />
    <Row p='7'>
      <Text gray>Copyright © 2020 Tlon Inc.</Text>
    </Row>

  </Col>
)

export default Footer;