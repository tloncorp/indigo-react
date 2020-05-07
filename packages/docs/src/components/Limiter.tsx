import * as React from 'react'
import {
  Row,
  Center,
} from "@tlon/indigo-react";

const Limiter = ({children, ...props}) => (
  <Center>
    <Row expand maxWidth='1440px'>
      {children}
    </Row>
  </Center>
)

export default Limiter;
