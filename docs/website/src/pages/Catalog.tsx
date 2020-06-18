import * as React from "react";
import { useEffect}  from 'react'
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

import { assetUrl } from '../constants'

// @ts-ignore
import button from '../assets/componentImages/button.png'
// @ts-ignore
import asyncButton from '../assets/componentImages/asyncButton.png'

const LinkWrap = styled(RouterLink)`
  color: black;
  text-decoration: none;
`


const fetchManifest = () => {
  return fetch(`${assetUrl}/data/manifest.json`)
  .then(response => response.json())
  .catch(err => console.error(err))
}

const Catalog = () => {

  const promise = fetchManifest();

  const [manifest, setManifest] = useState(null);

  useEffect(() => {
    promise.then(manifest => {
      setManifest(manifest);
    });
  }, []);

  console.log(manifest)

    return (
      <Col expand minHeight='100vh'>
        <Rule />
        <Col p='7'>
          <Text fontSize='1' bold>Component Catalog</Text>
          <Measure mt='4'>
            <Text gray fontSize='2'>Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.</Text>
          </Measure>
        </Col>
        <Rule />
        {
          manifest !== null
            ? manifest.map(section => <ComponentSection section={section} />)
            : null
        }
      </Col>
    )
}


const ComponentSection = ({section}) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <React.Fragment>
      <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)} >
      <Col p='4'>
        <DisclosureButton>
          <Row>
            <Text bold fontSize='2'>{section.name}</Text>
          </Row>
        </DisclosureButton>
        <DisclosurePanel>
          <Row wrap>
            {
              section !== null
                ? section.components.map(name => <ComponentTile name={name} />)
                : null
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
  border-color: ${p => p.theme.colors.lightGray};
  &:hover {
    border-color: ${p => p.theme.colors.lightGray};
  }
`

HoverBox.defaultProps = {
  borderRadius: '4',
  mb: '2',
  width: '100%',
  pb: '66%',
  backgroundColor: 'lightGray',
}

const ComponentTile = ({name}) => (
  <Col width='20%' p='4'>
    <LinkWrap to={`catalog/${name}`}>
      <HoverBox 
        borderRadius='3'
        mb='2' 
        width='100%'
        pb='66%'
        backgroundColor='lightGray'
        backgroundImage={`url(${tileImages[name]})`}
        backgroundSize='contain'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        >
      </HoverBox>
      <Text fontSize='2'>{name}</Text>
    </LinkWrap>
  </Col>
)

export default Catalog
