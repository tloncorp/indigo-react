import * as React from "react";
import Row from '../core/Row';
import Col from '../core/Col';

const C = ({ children, ...props }) => (
  <Col width={["100%", "50%", "25%"]} {...props}>
    {children || <div />}
  </Col>
)

const FourUp = ({ children, ...props }) => (
  <Row flexDirection={["column", "row", "row"]} flexWrap='wrap' {...props}>
    <C mb={['8','8','0']}>{children[0]}</C>
    <C mb={['8','8','0']}>{children[1]}</C>
    <C mb={['8','0','0']}>{children[2]}</C>
    <C mb={['0','0','0']}>{children[3]}</C>
  </Row>
);

export default FourUp;
