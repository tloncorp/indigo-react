import * as React from "react";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import {
  Row,
  Text,
  Rule,
  Col,
  TwoUp,
  Center,
  Box,
} from "@tlon/indigo-react";
import * as indigo from '@tlon/indigo-react'
import { isOdd } from "../utils";
import { assetUrl } from '../constants';

const parseKind = k => {
  if (k === 91) return 'false'
  return k
}

const TableHeading = ({children, ...props}) => (
  <Col p='2' {...props}><Text bold gray>{children}</Text></Col>
)

const TableData = ({children, ...props}) => (
  <Col p='2' {...props}><Text>{children}</Text></Col>
)

const Table = ({rows}) => (
  <Col expand>
    <Row>
      <TableData p='3'>{''}</TableData>
      <TableHeading width='10%'>Name</TableHeading>
      <TableHeading width='10%'>Optional</TableHeading>
      <TableHeading width='10%'>Default Value</TableHeading>
      <TableHeading width='70%'>Type</TableHeading>
      <TableData p='3'>{''}</TableData>
    </Row>
    {
      rows.map((row, index) => (
        <Row backgroundColor={isOdd(index) ? 'white' : 'gray'}>
          <TableData p='3'>{''}</TableData>
          <TableData width='10%'>{row.name}</TableData>
          <TableData width='10%'>{row.isOptional.toString()}</TableData>
          <TableData width='10%'>{row.text || parseKind(row.kind)}</TableData>
          <TableData width='70%'>{row.type}</TableData>
          <TableData p='3'>{''}</TableData>
        </Row>
      ))
    }
  </Col>
)

const fetchProperties = (id:string) => {
  return fetch(`${assetUrl}/data/properties/${id}.json`)
  .then(response => response.json())
  .catch(err => console.error(err))
}

const fetchMetadata = (id:string) => {
  return fetch(`${assetUrl}/data/metadata/${id}.json`)
  .then(response => response.json())
  .catch(err => console.error(err))
}

const fetchComponentData = (id) => {
  return Promise.all([
    fetchProperties(id),
    fetchMetadata(id)
  ]).then(([properties, metadata]) => {
    return {properties, metadata};
  })
}


const CatalogPage = () => {

    let { componentId } = useParams();

    const promise = fetchComponentData(componentId);

    const [properties, setProperties] = useState(null);
    const [metadata, setMetadata] = useState(null);

    useEffect(() => {
      promise.then(res => {
        setProperties(res.properties);
        setMetadata(res.metadata);
      });
    }, []);

    return (
      <Col expand minHeight='100vh'>
        <Rule />

        <Col p='7'>
          <Text bold fontSize='2'>{componentId}</Text>
        </Col>
        <Row p='7'>
          <Row expand height='13' p='4' border='1px solid silver' borderRadius='3'>
          <LiveProvider scope={indigo} code="<Button border>Hello World!</Button>">
            <Col width='50%'>
              <LiveEditor />
              <LiveError />
            </Col>
            <Rule vertical />
            <Col width='50%'>
              <Center height='100%'><LivePreview /></Center>
            </Col>
            
          </LiveProvider>
          </Row>
        </Row>

        <Row>
          <Text bold fontSize='2' p='4' px='7'>Properties</Text>
        </Row>
        {
          properties !== null
            ? <Table rows={properties.types} />
            : null
        }

      </Col>
    )
}

export default CatalogPage
