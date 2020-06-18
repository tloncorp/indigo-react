import * as React from 'react'
import {
  Text,
  Col,
} from "@tlon/indigo-react";

const CopyBlock = ({title, copy}) => (
  <Col px='7'>
    <Text fontSize='2' pb='2'>{title}</Text>
    <Text fontSize='2' gray>{copy}</Text>
  </Col>
)

export default CopyBlock
