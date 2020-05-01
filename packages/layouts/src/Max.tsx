import * as React from 'react'
import Row from '../core/Row';
import Center from '../core/Center';

const Max = ({children, ...props}) => (
  <Center>
    <Row expand maxWidth='1440px'>
      {children}
    </Row>
  </Center>
)

export default Max;
