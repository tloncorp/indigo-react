import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Text } from "local-indigo-react";
import { baseURL } from "../constants";
import { ComponentPreview } from "../components/ComponentPreview";
import { ComponentProperties } from "../types";

const fetchProperties = (id: string) => {
  return fetch(`${baseURL}/componentData/${id}.json`)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const fetchComponentData = (id: string) => {
  return Promise.resolve(fetchProperties(id)).then(
    (properties: ComponentProperties) => {
      return properties;
    }
  );
};

export const ComponentPage = () => {
  let { id } = useParams();

  const promise = fetchComponentData(id);

  const [properties, setProperties] = useState<ComponentProperties>();

  useEffect(() => {
    promise.then((properties) => setProperties(properties));
  }, []);

  if (properties?.displayName) {
    return (
      <Col>
        <Link to="/">{"<- Index"}</Link>
        <Text>{properties.displayName}</Text>
        <ComponentPreview properties={properties} />
      </Col>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};
