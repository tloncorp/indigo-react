import * as React from "react";
// import { Link } from "react-router-dom";
import { Row, Text } from "local-indigo-react";

export const Header = () => (
  <Row
    height="6"
    px="4"
    alignItems="center"
    borderBottom="1px solid"
    borderBottomColor="washedGray"
  >
    <Text>Indigo Documentation</Text>
  </Row>
);
