import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Text } from "local-indigo-react";
import { baseURL } from "../constants";
// import { snippet } from '../../../src/Action/docs'

const fetchProperties = (id: string) => {
  return fetch(`${baseURL}/data/${id}.json`)
    .then((response) => response.json())
    .catch((err) => console.error(err, `${baseURL}/components/${id}.json`));
};

const fetchComponentData = (id: string) => {
  return Promise.resolve(fetchProperties(id)).then((properties) => {
    return properties;
  });
};

export const ComponentPage = () => {
  let { id } = useParams();

  const promise = fetchComponentData(id);

  const [properties, setProperties] = useState(undefined);
  // const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    promise.then((res) => {
      setProperties(res);
    });
  }, []);

  return (
    <Col>
      <Text>{id || ""}</Text>
      {typeof properties !== "undefined" ? (
        <>
          <Text>{properties.displayName}</Text>
          <Text>{properties.snippet}</Text>
        </>
      ) : null}
    </Col>
  );
};
