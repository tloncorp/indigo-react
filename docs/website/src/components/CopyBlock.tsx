import * as React from 'react'
import {
  Text,
  Col,
} from "@tlon/indigo-react";

const CopyBlock = ({title, copy}) => (
  <Col px='7'>
    <Text fontSize='1' pb='2'>{title}</Text>
    <Text fontSize='1' gray>{copy}</Text>
  </Col>
)

export default CopyBlock
