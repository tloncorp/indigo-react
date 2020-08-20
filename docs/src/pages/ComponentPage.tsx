import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Text, TwoUp, Center } from "local-indigo-react";
import * as indigo from "local-indigo-react";
import { baseURL } from "../constants";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const fetchProperties = (id: string) => {
  return fetch(`${baseURL}/componentData/${id}.json`)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const fetchComponentData = (id: string) => {
  return Promise.resolve(fetchProperties(id)).then((properties) => {
    return properties;
  });
};

export const ComponentPage = () => {
  let { id } = useParams();

  const promise = fetchComponentData(id);

  const [properties, setProperties] = useState();

  useEffect(() => {
    promise.then((res) => {
      setProperties(res);
    });
  }, []);

  if (typeof properties !== "undefined") {
    return (
      <Col>
        <Link to="/">{"<- Index"}</Link>
        <Text>{properties!.displayName}</Text>

        <LiveProvider scope={indigo} code={properties!.snippet || ""}>
          <TwoUp>
            <Col>
              <LiveEditor />
              <LiveError />
            </Col>
            <Center>
              <LivePreview />
            </Center>
          </TwoUp>
        </LiveProvider>
      </Col>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};
