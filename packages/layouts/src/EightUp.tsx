import * as React from "react";
import Row from '@tlon/indigo-core';
import Col from '@tlon/indigo-core';

const C = ({ children, ...props  }) => (
  <Col width={["50%", "25%", "12.5%"]} {...props}>
    {children || <div />}
  </Col>
);

const EightUp = ({ children, ...props }) => (
  <Row flexDirection={["row", "row", "row"]} flexWrap='wrap' {...props}>
    <C mb={['8','8','0']}>{children[0]}</C>
    <C mb={['8','8','0']}>{children[1]}</C>
    <C mb={['8','8','0']}>{children[2]}</C>
    <C mb={['8','8','0']}>{children[3]}</C>
    <C mb={['8','0','0']}>{children[4]}</C>
    <C mb={['8','0','0']}>{children[5]}</C>
    <C mb={['0','0','0']}>{children[6]}</C>
    <C mb={['0','0','0']}>{children[7]}</C>
  </Row>
);

export default EightUp;
