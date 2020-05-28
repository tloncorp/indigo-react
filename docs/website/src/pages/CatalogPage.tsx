import * as React from "react";
import { useState, useEffect } from 'react'

import {
  Row,
  Text,
  Rule,
  Col,
  TwoUp,
  Center,
  Box,
} from "@tlon/indigo-react";
import { checkPropTypes } from "prop-types";
import { isOdd } from "../utils";
import { url } from '../constants';


// const sequence = num => Array.from(Array(num), (_, i) => i);

const Table = ({component}) => component.props.map(prop => {
  const assignment = prop.assignment
  return (
    <Col expand>
        <Row p='2' px='7'><Text bold>{assignment}</Text></Row>

    {
      prop.types.map(type => {
      const name = type.name
      return (
        <Col>
        <Row p='2' px='7' pl='7'><Text bold>{name || 'Other'}</Text></Row>
        <Row p='2' px='7' pl='7'>
          <Col width='25%'>
            <Text gray bold>Name</Text>
          </Col>
          <Col width='25%'>
            <Text gray bold>Optional</Text>
          </Col>
          <Col width='25%'>
            <Text gray bold>Typing</Text>
          </Col>
          <Col width='25%'>
            <Text gray bold>Default Value</Text>
          </Col>
        </Row>
        {
          type.types.map((innerType, index) => {
            const innerName = innerType.name
            return (
              <Row p='2' px='7' pl='7' backgroundColor={isOdd(index) ? 'white' : 'gray0'}>
                <Col width='25%'>
                  <Text mono>{innerType.name}</Text>
                </Col>
                <Col width='25%'>
                  <Text mono>{innerType.optional.toString()}</Text>
                </Col>
                <Col width='25%'>
                  <Text mono>{innerType.type}</Text>
                </Col>
                <Col width='25%'>
                  <Text mono>undefined</Text>
                </Col>
              </Row>
            )
          })
        }
        </Col>
      )
    })
  }
  </Col>
  )
})

const fetchProperties = (catagory, key) => {
  return fetch(`${url}/data/props/${catagory}/${key}.props.json`)
  .then(response => response.json())
  .catch(err => console.error(err))
}

const fetchMetadata = (catagory, key) => {
  console.log(`${url}/data/metadata/${catagory}/${key}.metadata.json`)
  return fetch(`${url}/data/metadata/${catagory}/${key}.metadata.json`)
  .then(response => response.json())
  .catch(err => console.error(err))
}

const fetchComponentData = (catagory, key) => {
  return Promise.all([
    fetchProperties(catagory, key),
    fetchMetadata(catagory, key)
  ]).then(([properties, metadata]) => {
    return {properties, metadata};
  })
}



const CatalogPage = () => {

  const key = 'Button'
  const catagory = 'buttons'

  // const promise = fetchComponentData(catagory, key);

    // const [user, setUser] = useState(null);
    // const [posts, setPosts] = useState(null);

    useEffect(() => {
      fetchComponentData(catagory, key).then(data => {
        console.log(data)
        // setUser(data.user);
        // setPosts(data.posts);
      });
    }, []);

    // let { componentId } = useParams();
    // const component = components.button


    // const properties = React.lazy(() => import(`../data/properties/${catagory}/${component}.props.json`)); // Lazy-loaded

    // console.log(properties)

    return (
      <Col expand minHeight='100vh'>
        <Rule />

        <Col p='7'>
          <Text fontSize='5' bold>{component.name}</Text>
        </Col>

        <TwoUp>
          <Col p='7' pr='4'><Box borderRadius='4' border='1px solid silver'><Center height='13'>Example</Center></Box></Col>
          <Col p='7' pl='4'><Box borderRadius='4' border='1px solid silver'><Center height='13'>Code</Center></Box></Col>
        </TwoUp>

        <Row>
          <Text bold fontSize='4' p='4' px='7'>Properties</Text>
        </Row>
      </Col>
    )
}
