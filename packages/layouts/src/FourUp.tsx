import * as React from "react";
import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

import Row from '../../core/src/Row';
import Col from '../../core/src/Col';

type Props =
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
  };

const C = ({ children, ...props }:Props) => (
  <Col width={["100%", "50%", "25%"]} {...props}>
    {children || <div />}
  </Col>
)

const FourUp = ({ children, ...props }:Props) => (
  <Row flexDirection={["column", "row", "row"]} flexWrap='wrap' {...props}>
    <C mb={['8','8','0']}>{children[0]}</C>
    <C mb={['8','8','0']}>{children[1]}</C>
    <C mb={['8','0','0']}>{children[2]}</C>
    <C mb={['0','0','0']}>{children[3]}</C>
  </Row>
);

export default FourUp;
