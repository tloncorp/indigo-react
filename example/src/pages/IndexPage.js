import React from 'react'
import { Div, Box, H4, P, StyledA, StyledLink, StyledCode, Flex, Li } from 'indigo-react'
import theme from 'indigo-tokens'

import Color from '../components/Color'
import Typescale from '../components/Typescale'
import Spacing from '../components/Spacing'
import Visual from '../components/Visual'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Div maxWidth={1024} m={"0 auto"}>
        <Flex>
          <Div flexBasis="100%">
            <H4>●◆▲</H4>
            <H4 pt={[4]}>Indigo</H4>
            <H4>This is our styleguide for Urbit’s interfaces </H4>
            <H4 mt={[8]} mb={[4]}>Getting Started</H4>
          </Div>
          <Div flexBasis="40%">
            <StyledCode>indigo-tokens</StyledCode>
            <P my={[2]}>Named style attributes we use to maintain a consistent and scalable system</P>
            <StyledLink underline pr={[2]}>NPM</StyledLink>
            <StyledLink underline>Github</StyledLink>
          </Div>
          <Div flexBasis="40%">
            <StyledCode>indigo-react</StyledCode>
            <P my={[2]}>Component library we use to prototype and build our interfaces. Style attributes from indigo-tokens.</P>
            <StyledLink underline pr={[2]}>NPM</StyledLink>
            <StyledLink underline>Github</StyledLink>
          </Div>
        </Flex>

        <Div mt={[9]} id='Spacing'>
          <Flex>
            <Spacing />
          </Flex>
        </Div>

        <Div p={[5, 8, 9]} id='Visual'>
          <Visual />
        </Div>

        <Div p={[5, 8, 9]} id='Typescale'>
          <Typescale />
        </Div>

        <Div p={[5, 8, 9]} id='Color'>
          <Color />
        </Div>

        <Div p={[5, 8, 9]} id='Layout'>
          <div>A section about layout.</div>
        </Div>
      </Div>
    )
  }
}
