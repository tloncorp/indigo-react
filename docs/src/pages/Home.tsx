import * as React from "react";
import { Link } from "react-router-dom";
import { Col, Text } from "local-indigo-react";
import manifest from "../../public/manifest.json";

export const Home = () => (
  <Col>
    {manifest.components.map((component) => (
      <Link to={`/component/${component.id}`}>{component.displayName}</Link>
    ))}
  </Col>
);
