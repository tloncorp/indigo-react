import * as React from "react";
import { Link } from "react-router-dom";
import { Col, Text } from "local-indigo-react";

export const Home = () => (
  <Col>
    <Text>Indigo React</Text>
    <Link to="/component/action">Action</Link>
  </Col>
);
