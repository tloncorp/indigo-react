import * as React from 'react'

import {
  Row,
  Col,
  Icon,
  Text,
  Img,
  Button,
} from "@tlon/indigo-react";
import favicon from '../assets/Favicon.png'

const FooterHeading = (props) => (
  <Col expand>
    <Row expand justifyContent='space-between' p='7'>

      <Row alignItems='center'>
        <Img width='4' src={favicon} />
        <Text fontSize='0' bold pl='2'>Indigo</Text>
      </Row>


    </Row>
  </Col>
)

export default FooterHeading;
