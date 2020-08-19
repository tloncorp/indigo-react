import * as React from "react";
import { CommonStyleProps } from "../systemHelpers";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

export type TwoUpProps = CommonStyleProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNodeArray;
  };

type ChildProps = CommonStyleProps & React.HTMLAttributes<HTMLDivElement>;

const Child = ({ children, ...props }: ChildProps) => (
  <Col width={["100%", "100%", "50%"]} {...props}>
    {children || <div />}
  </Col>
);

export const TwoUp = ({ children, ...props }: TwoUpProps) => (
  <Row flexDirection={["column", "row", "row"]} flexWrap="wrap" {...props}>
    <Child>{children[0] || <div />}</Child>
    <Child>{children[1] || <div />}</Child>
  </Row>
);

TwoUp.displayName = "TwoUp";
