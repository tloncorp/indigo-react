import * as React from "react";
import {
  color,
  space,
  typography,
  layout,
  compose,
} from 'styled-system';
import styled from 'styled-components'
import {
  Box,
  Row,
  Rule,
  T2,
  Col,
  Center,
  ItemRow,
  T3,
  T1,
  Text,
  T4,
  Space,
  styleAnchor,
} from "indigo-react";

import { Link } from 'react-router-dom';

const StyledLink = styleAnchor(Link);

const Item = props => (
  <Box p='7'>
    <Space pb='2'>
      <T3>{props.title}</T3>
      <Row alignItems='baseline' pb='2' flexWrap='wrap'>
        <T2 gray pr='2' mono>{props.package}</T2>
        <T2 gray mono >{props.version}</T2>
      </Row>
      <T2 gray>{props.description}</T2>
      <Col>
        {
          props.links.map(link => (
            <StyledLink gray fs='2' py='1' to={link[1]}>
              {link[0]}
            </StyledLink>
          ))
        }
      </Col>
    </Space>
  </Box>
);

export default class Home extends React.Component {
  render() {
    return (
      <Box>
        <Center p='7' height={[12, 13, 14]}>
          <Row alignItems="center">
            <Text fs='8' color='blue2'>●</Text>
            <Text fs='8' color='red2'>◆</Text>
            <Text fs='8' color='green2'>▲</Text>
            <Text fs='7' pl='4'>Indigo</Text>
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
            description="A styled-system compliant index of ratios, colors, type and other design tokens upon which Indigo is based." />

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
          <T4 textAlign='center' maxWidth="544px">
            Indigo is a design system maintained by Tlon, the company behind the platform for a new, peer-to-peer internet, Urbit.
          </T4>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <T4 textAlign='center' maxWidth="544px">
            It is designed for maximum consistency, simplicity and legibility.
          </T4>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <T4 textAlign='center' maxWidth="544px">
            It is 100% open source and licensed under MIT.
          </T4>
        </Center>

        <Rule/>
        <Row p='7'>
          <T3>Footer</T3>
        </Row>
      </Box>
    )
  }
}
