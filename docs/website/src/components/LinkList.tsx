import * as React from 'react'

import {
  Text,
  Row,
  Col,
} from "@tlon/indigo-react";

const LinkList = ({ title, items, ...props }) => (
  <Col {...props} p='4'>
    <Text bold fontSize='0'>{title}</Text>
    {
      items.map((item, index) => (
        <Row>
          <Text pt='1' fontSize='0' gray>
            {item.title}
          </Text>
        </Row>
      ))
    }
  </Col>
);

export default LinkList;
