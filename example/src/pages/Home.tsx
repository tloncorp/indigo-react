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
  styleAnchor,
} from "indigo-react";

// import { Link } from 'react-router-dom';

// const StyledLink = styleAnchor(Link);

const Item = props => (
  <Box p='7'>
    <Space pb='2'>
      <Row alignItems='baseline'>
        <Text fontSize='3'>{props.title}</Text>
        <Code borderRadius='1' ml='2' fontSize='3'>{props.version}</Code>
      </Row>
      <Text fontSize='3' gray>{props.description}</Text>
      <Col>
        {
          props.links.map(link => (
            <Anchor target='_blank' gray fontSize='3' my='1' href={link[1]}>
              <Row alignItems='center'>
                <Icon icon='ChevronEast' fill='gray5' mr='1'/>
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
        <Center p='7' height={[11, 13, 14]}>
          <Row alignItems="center">
            <Text fontSize='8' color='blue1'>●</Text>
            <Text fontSize='8' color='red1'>◆</Text>
            <Text fontSize='8' color='green1'>▲</Text>
            <Text fontSize='7' pl='4'>Indigo</Text>
          </Row>
        </Center>
        <Rule />
        <ItemRow columns={[1, 2, 4]}>
          <Item
            title="Figma Component Library"
            package=""
            version="1.2.0"
            links={[
              ['Figma', 'https://www.figma.com/file/H1RAHV4KscSTnvrIiL0z8C/Indigo-1.1?node-id=1%3A6'],
            ]}
            description="Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations."/>

          <Item
            title="React Components"
            package="@tlon/indigo-react"
            version="1.1.3"
            links={[
              ['NPM', 'https://www.npmjs.com/package/@tlon/indigo-react'],
              ['Github', 'https://www.github.com/urbit/indigo-react'],
            ]}
            description="A React implementation of Indigo. Includes components for forms, buttons, layout and more."/>

          <Item
            title="Design Tokens"
            package="@tlon/indigo-tokens"
            version="1.2.4"
            links={[
              ['NPM', 'https://www.npmjs.com/package/@tlon/indigo-tokens'],
              ['Github', 'https://www.github.com/urbit/indigo-tokens'],
            ]}
            description="A styled-system compliant index of ratios, colors, type and other design tokens upon which Indigo is based." />

          <Item
            title="CSS Library"
            package="@tlon/indigo-css"
            version="1.2.4"
            links={[
              ['NPM', ''],
              ['Github', ''],
            ]}
            description="A modified version of Tachyons that uses Indigo design tokens."/>
        </ItemRow>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <Text fontSize='4' textAlign='center' maxWidth="544px">
            Indigo is a design system maintained by Tlon, the company creating Urbit, an operating system that powers a new, peer-to-peer internet.
          </Text>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <Text fontSize='4' textAlign='center' maxWidth="544px">
            It is designed for maximum consistency, simplicity and legibility.
          </Text>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <Text fontSize='4' textAlign='center' maxWidth="544px">
            100% open source and licensed under MIT.
          </Text>
        </Center>

        <Rule/>
        <Footer/>
      </Box>
    )
  }
}
