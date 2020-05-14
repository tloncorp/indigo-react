import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import styled from 'styled-components'

const LinkWrap = styled(RouterLink)`
  color: black;
  text-decoration: none;
`

import {
  Row,
  Text,
  Rule,
  Col,
  Measure,
  Box,
} from "@tlon/indigo-react";

export default class Catalog extends React.Component {
  render() {
    // let match = useRouteMatch();
    return (
      <Col expand minHeight='100vh'>
        <Rule />

        <Col p='7'>
          <Text fontSize='5' bold>Component Catalog</Text>
          <Measure mt='4'>
            <Text gray fontSize='4'>Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.</Text>
          </Measure>
        </Col>
        <Rule />
        {
          sections.map(section => <ComponentSection section={section} />)
        }
        



      </Col>
    )
  }
}

const sections = [
  {
    title: 'Buttons',
    components: [
      {title: 'AsyncButton', key:'asyncbutton'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
    ]
  }
]


const ComponentSection = ({section}) => (
  <Col p='4' >
    <Row p='4'><Text bold fontSize='4'>{section.title}</Text></Row>
    <Row wrap pb='4'>
      {
        section.components.map(component => <ComponentTile component={component} />)
      }
    </Row>
    <Rule />

  </Col>
)

const ComponentTile = ({component}) => (
  <Col width='25%' p='4'>
    <LinkWrap to={`catalog/${component.key}`}>
      <Box borderRadius='4' mb='2' width='100%' pb='66%' backgroundColor='gray0'/>
      <Text fontSize='4'>{component.title}</Text>
    </LinkWrap>
  </Col>
)
