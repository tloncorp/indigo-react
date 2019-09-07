import React from "react";
import { Box, Flex, Container, H4, P, Span, StyledA, StyledCode } from "indigo-react";

import Spacing from '../components/Spacing'
import Color from '../components/Color'
import FontSize from '../components/FontSize'
import FontFamily from '../components/FontFamily'
import FontWeight from '../components/FontWeight'
import LineHeight from '../components/LineHeight'
import Border from '../components/Border'
import BorderRadius from '../components/BorderRadius'
import ZIndices from '../components/ZIndices'
import Buttons from '../components/Buttons'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Container>
        <Box height="95vh">
          <Flex mt={[10]}>
            <Box>
              <Box fontSize="4">
              <Span color="blue.2">●</Span>
              <Span color="green.2">◆</Span>
              <Span color="yellow.2">▲</Span>
              </Box>
              <H4>Indigo</H4>
            </Box>
          </Flex>
          <Flex  mt={[11]} mb={[8]}>
            <Box width={[1,1/2]}>
              <StyledCode>indigo-tokens</StyledCode>
                <StyledA href="https://npmjs.com/indigo-tokens" target="_blank" px={[2]}>NPM</StyledA>
                <StyledA href="https://github.com/urbit/indigo-tokens" target="_blank">Github</StyledA>
              <P width={10/12} my={[2]}>Named style attributes we use to maintain a consistent and scalable system</P>
              <Box mb={[2]}>
              <StyledA mr={[2]} href="#Spacing">Spacing</StyledA>
              <StyledA mr={[2]} href="#Color">Color</StyledA>
              </Box>
              <Box mb={[2]}>
              <StyledA mr={[2]} href="#FontSize">Font Size</StyledA>
              <StyledA mr={[2]} href="#FontFamily">Font Family</StyledA>
              <StyledA mr={[2]} href="#FontWeight">Font Weight</StyledA>
              </Box>
              <Box mb={[2]}>
              <StyledA mr={[2]} href="#LineHeight">Line Height</StyledA>
              <StyledA mr={[2]} href="#Border">Border</StyledA>
              <StyledA mr={[2]} href="#BorderRadius">Border Radius</StyledA>
              <StyledA mr={[2]} href="#zIndices">Z-Index</StyledA>
              </Box>
            </Box>
          </Flex>
          <Flex>
            <Box width={[1,6/12]}>
              <StyledCode>indigo-react</StyledCode>
              <StyledA href="https://npmjs.com/indigo-react" target="_blank" px={[2]}>NPM</StyledA>
              <StyledA href="https://github.com/urbit/indigo-react">Github</StyledA>
              <P width={10/12} my={[2]}>React component library for prototyping and building interfaces. </P>
            </Box>
            <Box width={[1,6/12]}>
              <StyledCode>indigo-static</StyledCode>
              <StyledA href="https://github.com/urbit/indigo-static" target="_blank" ml="2">Github</StyledA>
              <P width={10/12} my={[2]}>Tachyons CSS library for building static pages</P>
            </Box>
          </Flex>
        </Box>
        <Box mt={[9]} id='Spacing'>
          <H4 mb={[5]}>Spacing</H4>
          <Spacing />
        </Box>
        <Box mt={[9]} id='Color'>
          <H4 mb={[5]}>Color</H4>
            <Color />
        </Box>
        <Box mt={[9]} id='FontSize'>
          <H4 mb={[5]}>Font Size</H4>
            <FontSize />
        </Box>
        <Box mt={[9]} id='FontFamily'>
          <H4 mb={[5]}>Font Family</H4>
            <FontFamily />
        </Box>
        <Box mt={[9]} id='FontWeight'>
          <H4 mb={[5]}>Font Weight</H4>
            <FontWeight />
        </Box>
        <Box mt={[9]} id='LineHeight'>
          <H4 mb={[5]}>Line Height</H4>
            <LineHeight />
        </Box>
        <Box mt={[9]} id='Border'>
          <H4 mb={[5]}>Border</H4>
            <Border />
        </Box>
        <Box mt={[9]} id='BorderRadius'>
          <H4 mb={[5]}>Border Radius</H4>
            <BorderRadius />
        </Box>
        <Box my={[9]} id='zIndices'>
          <H4 mb={[5]}>Z Index</H4>
            <ZIndices />
        </Box>
        <Box my={[9]} id='Buttons'>
          <H4 mb={[5]}>Buttons</H4>
            <Buttons />
        </Box>
      </Container>
    )
  }
}
