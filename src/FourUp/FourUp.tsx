import * as React from "react";
import { CommonStyleProps } from "../systemHelpers";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

export type FourUpProps = CommonStyleProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNodeArray;
  };

type ChildProps = CommonStyleProps & React.HTMLAttributes<HTMLDivElement>;

const Child = ({ children, ...props }: ChildProps) => (
  <Col width={["100%", "50%", "25%"]} {...props}>
    {children || <div />}
  </Col>
);

export const FourUp = ({ children, ...props }: FourUpProps) => (
  <Row flexDirection={["column", "row", "row"]} flexWrap="wrap" {...props}>
    <Child>{children[0] || <div />}</Child>
    <Child>{children[1] || <div />}</Child>
    <Child>{children[2] || <div />}</Child>
    <Child>{children[3] || <div />}</Child>
  </Row>
);

FourUp.displayName = "FourUp";
