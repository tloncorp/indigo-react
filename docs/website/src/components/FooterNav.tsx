import * as React from 'react'

import {
  Row,
  Col,
  Icon,
  Text,
  Img,
  Rule,
  EightUp,
  Button,
} from "@tlon/indigo-react";
import LinkList from './LinkList'
// import icon from '../assets/icon.png'

const FooterNav = (props) => (
  <Col expand px='4' py='7'>
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
  </Col>
)

export default FooterNav;
