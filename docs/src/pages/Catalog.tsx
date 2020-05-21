import * as React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from 'styled-components'

import {
  Row,
  Text,
  Rule,
  Col,
  Measure,
  Box,
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@tlon/indigo-react";

import { baseurl } from '../constants'

// @ts-ignore
import button from '../assets/componentImages/button.png'
// @ts-ignore
import asyncButton from '../assets/componentImages/asyncButton.png'

const LinkWrap = styled(RouterLink)`
  color: black;
  text-decoration: none;
`

export default class Catalog extends React.Component {
  render() {
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
      {title: 'AsyncButton', key:'asyncButton'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
    ]
  },
  {
    title: 'Controls',
    components: [
      {title: 'AsyncButton', key:'asyncButton'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
      {title: 'Button', key:'button'},
    ]
  },
]

const ComponentSection = ({section}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)} >
      <Col p='4'>
        <DisclosureButton>
          <Row>
            <Text bold fontSize='4'>{section.title}</Text>
          </Row>
        </DisclosureButton>
        <DisclosurePanel>
          <Row wrap>
            {
              section.components.map(component => <ComponentTile component={component} />)
            }
          </Row>
        </DisclosurePanel>
      </Col>
    </Disclosure>
    <Rule/>
  </React.Fragment>
  )
}

const tileImages = {
  button: button,
  asyncButton: asyncButton,
}

const HoverBox = styled(Box)`
  border-style: solid;
  border-width: 1px;
  border-color: ${p => p.theme.colors.gray0};
  &:hover {
    border-color: ${p => p.theme.colors.gray2};
  }
`

HoverBox.defaultProps = {
  borderRadius: '4',
  mb: '2',
  width: '100%',
  pb: '66%',
  backgroundColor: 'gray0',
}

const ComponentTile = ({component}) => (
  <Col width='25%' p='4'>
    <LinkWrap to={`catalog/${component.key}`}>
      <HoverBox 
        borderRadius='4'
        mb='2' 
        width='100%'
        pb='66%'
        backgroundColor='gray0'
        backgroundImage={`url(${tileImages[component.key]})`}
        backgroundSize='contain'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        >
      </HoverBox>
      <Text fontSize='4'>{component.title}</Text>
    </LinkWrap>
  </Col>
)
