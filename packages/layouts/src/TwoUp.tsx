import * as React from "react";
import Row from '../core/Row';
import Col from '../core/Col';

const C = ({ children, ...props }) => (
  <Col width={["100%", "100%", "50%"]} {...props}>
    {children || <div />}
  </Col>
);

const TwoUp = ({ children, ...props }) => (
  <Row flexDirection={["column", "row", "row"]} flexWrap='wrap' {...props}>
    <C mb={['7','7','0']}>{children[0]}</C>
    <C mb={['0','0','0']}>{children[1]}</C>
  </Row>
);

export default TwoUp;
