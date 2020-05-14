import * as React from 'react'
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
// import { color, layout, space, typography, compose } from "styled-system";
import {
  Text,
  Col,
  Code,
  Row,
  Icon
} from "@tlon/indigo-react";

// import Link from './Link'

const IconLinkContainer = styled(RouterLink)`

  font-weight: ${p =>
    p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular};

  font-family: ${p => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};
  text-decoration: none;

  display: flex;
  align-items: center;

  * {color {
    ${p => p.theme.colors.gray5};
  }}

  * {fill: ${p => p.theme.colors.gray5};}

  &:hover {
    * {color: ${p => p.theme.colors.black};}
    * {fill: ${p => p.theme.colors.black};}
  }

`


const LibraryBlock = ({title, copy, version, links}) => (
  <Col px='7'>
    <Row alignItems='baseline'>
      <Text fontSize='4' pb='2' pr='2'>{title}</Text>
      <Code fontSize='4' pb='2'>{version}</Code>
    </Row>
    <Text fontSize='4' gray>{copy}</Text>
    <Col mt='4'>
      {
        links.map(link => (
          <IconLinkContainer display='flex' to={link.to} mt='4'>
            <Icon size='5' icon='ArrowEast' />
            <Text color='gray5' fontSize='4'>{link.text}</Text>
          </IconLinkContainer>
        ))
      }
    </Col>
  </Col>
)

export default LibraryBlock
