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
} from "indigo-react";

import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: ${p => {
    if (p.theme.dark) {
      if (p.gray) return p.theme.colors.grayMid;
      return p.theme.colors.white;
    }
    if (p.gray) return p.theme.colors.gray;
    return p.theme.colors.black;
  }};
  font-weight: ${p => {
    if (p.bold) return p.theme.fontWeights.bold;
    return p.theme.fontWeights.regular;
  }};
  ${compose(color, layout, space, typography)};
`

StyledLink.defaultProps = {
  lineHeight: 'short',
  fontSize: 2,
  margin: 0,
  fontWeight: 400,
}

const Item = props => (
  <Box  p='7'>
    <Row alignItems='baseline' pb='2' flexWrap='wrap'>
      <T2 pr='2'>{props.title}</T2>
      <T2 gray pr='2' mono>{props.package}</T2>
      <T2 gray mono >{props.version}</T2>
    </Row>
    <T3 gray py='1'>{props.description}</T3>
    <Col>
      {
        props.links.map(link => (
          <StyledLink gray fontSize='2' py='1' to={link[1]}>
            {link[0]}
          </StyledLink>
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
            <Text fontSize='8' color='blue'>●</Text>
            <Text fontSize='8' color='red'>◆</Text>
            <Text fontSize='8' color='green'>▲</Text>
            <Text pl='4' fontSize='7'>Indigo</Text>
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
          <T1 textAlign='center' maxWidth="544px">
            Indigo is a design system maintained by Tlon, the company behind the platform for a new, peer-to-peer internet, Urbit.
          </T1>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <T1 textAlign='center' maxWidth="544px">
            It is designed for maximum consistency, simplicity and legibility.
          </T1>
        </Center>

        <Rule/>
        <Center height={[12, 13, 14]} p='7'>
          <T1 textAlign='center' maxWidth="544px">
            It is 100% open source and licensed under MIT.
          </T1>
        </Center>
    
        <Rule/>
        <Row p='7'>
          <T3>Footer</T3>
        </Row>
      </Box>
    )
  }
}
