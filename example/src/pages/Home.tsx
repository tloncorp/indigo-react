import * as React from "react";
import {
  color,
  space,
  typography,
  compose,
} from 'styled-system';
import styled from 'styled-components'
import {
  Box,
  Row,
  Rule,
  P,
  Col,
  Center,
  Caption,
  ItemRow,
} from "indigo-react";

import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  font-weight: 400;
  ${compose(color, typography, space)}
`

const Item = props => (
  <Box minHeight={[10, 11, 12]} p='7'>
    <Row alignItems='baseline' pb='2' flexWrap='wrap'>
      <P pr='2' fontSize='1'>{props.title}</P>
      <Caption pr='2' fontSize='1' mono>{props.package}</Caption>
      <Caption fontSize='1' mono >{props.version}</Caption>
    </Row>

    <Caption fontSize='1' py='1'>{props.description}</Caption>

    <Col>
      {
        props.links.map(link => (
          <StyledLink fontSize='1' py='1' color="gray" to={link[1]}>{link[0]}</StyledLink>
        ))
      }
    </Col>
  </Box>
)

export default class Home extends React.Component {
  render() {
    return (
      <Box>
        <Center p='7' height={[12, 13, 14]}>
          <Row alignItems="center">
            <P fontSize='5' color='blue'>●</P>
            <P fontSize='5' color='red'>◆</P>
            <P fontSize='5' color='green'>▲</P>
            <P pl='4' fontSize='4'>Indigo</P>
          </Row>
        </Center>
        <Rule />
        <ItemRow columns={[1, 2, 4]}>
          <Item
            title="Figma Component Library"
            package=""
            version="v1.2"
            links={[
              ['↗ Figma', ''],
            ]}
            description="Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations."/>

          <Item
            title="React Components"
            package="@tlon/indigo-react"
            version="v1.1.3"
            links={[
              ['-> Docs', '/indigo-react/docs'],
              ['↗ NPM', ''],
              ['↗ Github', ''],
            ]}
            description="A React implementation of Indigo. Includes UI primtivies and components for forms, buttons, layout and much more."/>

          <Item
            title="Design Tokens"
            package="@tlon/indigo-tokens"
            version="v1.2.4"
            links={[
              ['-> Docs', '/indigo-tokens/docs'],
              ['↗ NPM', ''],
              ['↗ Github', ''],
            ]}
            description="A styled-system compliant index of ratios, colors, type and other design tokens upon which Indigo is based."/>

          <Item
            title="CSS Library"
            package="@tlon/indigo-css"
            version="v1.2.4"
            links={[
              ['-> Docs', '/indigo-css/docs'],
              ['↗ NPM', ''],
              ['↗ Github', ''],
            ]}
            description="A modified version of Techyons that uses Indigo design tokens."/>
        </ItemRow>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <P textAlign='center' maxWidth="544px">
            Indigo is a design system maintained by Tlon, the company behind the platform for a new, peer-to-peer internet, Urbit.
          </P>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <P textAlign='center' maxWidth="544px">
            It is designed for maximum consistency, simplicity and legibility.
          </P>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <P textAlign='center' maxWidth="544px">
            It is 100% open source and licensed under MIT.
          </P>
        </Center>
        
        <Rule/>
        <ItemRow columns={[1, 2, 4]}>
        <Box minHeight={[10, 11, 12]} display={['none', 'none', 'block']} p='7' />
          <Box minHeight={[10, 11, 12]} p='7'>
            <P fontSize='1'>Tlon</P>
            <Caption fontSize='1'>Tlon is building the platform for a new peer to peer internet. We make things that are technically excellent, architecturally sound, and aesthetically beautiful.</Caption>
          </Box>

          <Box minHeight={[10, 11, 12]} p='7'>
            <P  fontSize='1'>Urbit</P>
            <Caption fontSize='1'>Urbit is two new pieces of technology:
              Urbit OS + Urbit ID.

              Urbit OS is a clean slate reimagining of the operating system as an 'overlay OS'. It runs on any Unix machine with an internet connection. Urbit OS is a compact system for an individual to run their own permanent personal server.

              Urbit ID is a decentralized digital identity system. Your Urbit ID is a username, network address and crypto wallet designed for Urbit OS.

            </Caption>
          </Box>
          <Box minHeight={[10, 11, 12]} display={['none', 'none', 'block']} p='7' />
        </ItemRow>



        <Rule/>
        <Row p='7'>
          <P>Tlon (c) 2020</P>
        </Row>
      </Box>
    )
  }
}
