import * as React from "react";

import {
  Box,
  Row,
  Rule,
  Text,
  Col,
  Center,
  ItemRow,
  Space,
  Code,
  Icon,
  Anchor,
  BackgroundImage,
  styleAnchor,
  Svg,
  Img,
} from "indigo-react";
import bg from '../assets/bg.svg'

console.log(Icon)

const duri = svg => `data:image/svg+xml;base64,${btoa(svg)}`
const sequence = (num:number) => Array.from(Array(num), (_, i) => i);

const Item = props => (
  <Box p='7' py='10'>
    <Space pb='2'>
      <Row alignItems='baseline' flexWrap='wrap'>
        <Text fontSize='4' mr='2'>{props.title}</Text>
        <Code borderRadius='2' mr='2' fontSize='3'>{props.version}</Code>
        <Code borderRadius='2'  fontSize='3'>{props.stage}</Code>
      </Row>
      <Text fontSize='4' gray>{props.description}</Text>
      <Col>
        {
          props.links.map(link => (
            <Anchor target='_blank' gray fontSize='4' my='1' href={link[1]}>
              <Row alignItems='center'>
                {link[0]}
              </Row>
            </Anchor>
          ))
        }
      </Col>
    </Space>
  </Box>
);

const Footer = () => (
  <Row p='7'>
    <Text gray fontSize='3'>Copyright © 2020 Tlon Inc.</Text>
  </Row>
)

export default class Home extends React.Component {
  render() {
    return (
      <Box>
        <Row pb='10'>
        {
          sequence(32).map(_ =>
            <Img width='3.125%' src={bg} />
          )
        }
        </Row>

        <Row p='7' pb='10' pt='0'>
          <Text fontSize='6'><strong>Indigo</strong> is a design system.</Text>
        </Row>

        <Rule />
        <ItemRow columns={[1, 2, 4]}>
          <Item
            title="Figma Component Library"
            package=""
            version="1.2.0"
            stage="alpha"
            links={[
              ['Figma', 'https://www.figma.com/file/H1RAHV4KscSTnvrIiL0z8C/Indigo-1.1?node-id=1%3A6'],
            ]}
            description="Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations."/>

          <Item
            title="React Components"
            package="@tlon/indigo-react"
            version="1.1.3"
            stage="alpha"
            links={[
              ['NPM', 'https://www.npmjs.com/package/@tlon/indigo-react'],
              ['Github', 'https://www.github.com/urbit/indigo-react'],
            ]}
            description="A React implementation of Indigo. Includes components for forms, buttons, layout and more."/>

          <Item
            title="Design Tokens"
            package="@tlon/indigo-tokens"
            version="1.2.4"
            stage="alpha"
            links={[
              ['NPM', 'https://www.npmjs.com/package/@tlon/indigo-tokens'],
              ['Github', 'https://www.github.com/urbit/indigo-tokens'],
            ]}
            description="A styled-system compliant index of ratios, colors, type and other design tokens upon which Indigo is based." />

          <Item
            title="CSS Library"
            package="@tlon/indigo-css"
            version="1.2.4"
            stage="alpha"
            links={[
              ['NPM', ''],
              ['Github', ''],
            ]}
            description="A modified version of Tachyons that uses Indigo design tokens."/>
        </ItemRow>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <Text fontSize='5' textAlign='center' maxWidth="544px">
            Indigo is a design system built and maintained by Tlon, the company creating Urbit, an operating system that powers a new, peer-to-peer internet.
          </Text>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <Text fontSize='5' textAlign='center' maxWidth="544px">
            It is designed for maximum consistency, simplicity and legibility.
          </Text>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <Text fontSize='5' textAlign='center' maxWidth="544px">
            100% open source and licensed under MIT.
          </Text>
        </Center>

        <Rule/>
        <Footer/>
      </Box>
    )
  }
}
