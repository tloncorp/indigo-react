import React from 'react'
import { Div, H4, P, StyledLink, StyledCode, Flex} from 'indigo-react'
import theme from 'indigo-tokens'

import Spacing from '../components/Spacing'
import Color from '../components/Color'
import FontSize from '../components/FontSize'
import FontFamily from '../components/FontFamily'
import FontWeight from '../components/FontWeight'
import LineHeight from '../components/LineHeight'
import Border from '../components/Border'
import BorderRadius from '../components/BorderRadius'
import ZIndices from '../components/ZIndices'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Div maxWidth={1024} m={"0 auto"}>
        <Flex>
          <Div flex="1" mt={[10]}>
            <H4>●◆▲</H4>
            <H4 pt={[4]}>Indigo</H4>
            <H4>This is our styleguide for Urbit’s interfaces </H4>
          </Div>
        </Flex>
        <H4 mt={[8]} mb={[4]}>Getting Started</H4>
        <Flex>
          <Div flex="20%">
            <StyledCode>indigo-tokens</StyledCode>
            <P width={[12]} my={[2]}>Named style attributes we use to maintain a consistent and scalable system</P>
            <StyledLink underline pr={[2]}>NPM</StyledLink>
            <StyledLink underline>Github</StyledLink>
          </Div>
          <Div flex="40%">
            <StyledCode>indigo-react</StyledCode>
            <P width={[12]} my={[2]}>Component library we use to prototype and build our interfaces. Style attributes from indigo-tokens.</P>
            <StyledLink underline pr={[2]}>NPM</StyledLink>
            <StyledLink underline>Github</StyledLink>
          </Div>
        </Flex>

        <Div mt={[9]} id='Spacing'>
          <H4 mb={[5]}>Spacing</H4>
          <Flex>
            <Spacing />
          </Flex>
        </Div>
        <Div mt={[9]} id='Color'>
          <H4 mb={[5]}>Color</H4>
          <Flex>
            <Color />
          </Flex>
        </Div>
        <Div mt={[9]} id='FontSize'>
          <H4 mb={[5]}>Font Size</H4>
          <Flex>
            <FontSize />
          </Flex>
        </Div>
        <Div mt={[9]} id='FontFamily'>
          <H4 mb={[5]}>Font Family</H4>
          <Flex>
            <FontFamily />
          </Flex>
        </Div>
        <Div mt={[9]} id='FontWeight'>
          <H4 mb={[5]}>Font Weight</H4>
          <Flex>
            <FontWeight />
          </Flex>
        </Div>
        <Div mt={[9]} id='LineHeight'>
          <H4 mb={[5]}>Line Height</H4>
          <Flex>
            <LineHeight />
          </Flex>
        </Div>
        <Div mt={[9]} id='Border'>
          <H4 mb={[5]}>Border</H4>
          <Flex>
            <Border />
          </Flex>
        </Div>
        <Div mt={[9]} id='BorderRadius'>
          <H4 mb={[5]}>Border Radius</H4>
          <Flex>
            <BorderRadius />
          </Flex>
        </Div>
        <Div my={[9]} id='zIndices'>
          <H4 mb={[5]}>Z Index</H4>
          <Flex>
            <ZIndices />
          </Flex>
        </Div>
      </Div>
    )
  }
}
