import React from "react";
import { Box, Flex, Container, H2, H4, P, Button, Span, StyledA, StyledCode } from "indigo-react";

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
      <Container>
        <Flex>
          <Box width={[1, "1/3"]} mt={[10]}>
            <H4>●◆▲</H4>
            <H4 pt={[4]}>Indigo</H4>
            <H4>This is our styleguide for Urbit’s interfaces </H4>
          </Box>
        </Flex>
        <H4 mt={[8]} mb={[4]}>Getting Started</H4>
        <Flex>
          <Box flex="20%">
            <StyledCode>indigo-tokens</StyledCode>
            <P width={[12]} my={[2]}>Named style attributes we use to maintain a consistent and scalable system</P>
            <StyledA underline pr={[2]}>NPM</StyledA>
            <StyledA underline>Github</StyledA>
          </Box>
          <Box flex="40%">
            <StyledCode>indigo-react</StyledCode>
            <P width={[12]} my={[2]}>Component library we use to prototype and build our interfaces. Style attributes from indigo-tokens.</P>
            <StyledA underline pr={[2]}>NPM</StyledA>
            <StyledA underline>Github</StyledA>
          </Box>
        </Flex>

        <Box mt={[9]} id='Spacing'>
          <H4 mb={[5]}>Spacing</H4>
          <Flex justifyContent="space-between">
            <Spacing />
          </Flex>
        </Box>
        <Box mt={[9]} id='Color'>
          <H4 mb={[5]}>Color</H4>
          <Flex>
            <Color />
          </Flex>
        </Box>
        <Box mt={[9]} id='FontSize'>
          <H4 mb={[5]}>Font Size</H4>
          <Flex>
            <FontSize />
          </Flex>
        </Box>
        <Box mt={[9]} id='FontFamily'>
          <H4 mb={[5]}>Font Family</H4>
          <Flex>
            <FontFamily />
          </Flex>
        </Box>
        <Box mt={[9]} id='FontWeight'>
          <H4 mb={[5]}>Font Weight</H4>
          <Flex>
            <FontWeight />
          </Flex>
        </Box>
        <Box mt={[9]} id='LineHeight'>
          <H4 mb={[5]}>Line Height</H4>
          <Flex>
            <LineHeight />
          </Flex>
        </Box>
        <Box mt={[9]} id='Border'>
          <H4 mb={[5]}>Border</H4>
          <Flex>
            <Border />
          </Flex>
        </Box>
        <Box mt={[9]} id='BorderRadius'>
          <H4 mb={[5]}>Border Radius</H4>
          <Flex>
            <BorderRadius />
          </Flex>
        </Box>
        <Box my={[9]} id='zIndices'>
          <H4 mb={[5]}>Z Index</H4>
          <Flex>
            <ZIndices />
          </Flex>
        </Box>
        <Box p={[5, 8, 9]} id="Buttons">
          <H2 mb={[5]}>Buttons</H2>
          <Box mb="4">
            <Button onClick={() => console.log("Downloading...")}>
              <Span>Download Passport</Span>
              <Span>↓</Span>
            </Button>
          </Box>

          <Box mb="4">
            <Button
              onClick={() => console.log("Downloading...")}
              isLoading={true}
            >
              <Span>Loading...</Span>
              <Span display="flex" justifyContent="center" alignItems="center">
                <svg
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.13281 0.4375H2.10156V1.41406H1.13281V0.4375ZM3.07812 0.4375H4.04688V1.41406H3.07812V0.4375ZM5.02344 0.4375H6V1.41406H5.02344V0.4375ZM6.96875 0.4375H7.94531V1.41406H6.96875V0.4375ZM8.92188 0.4375H9.89062V1.41406H8.92188V0.4375ZM10.8672 0.4375H11.8359V1.41406H10.8672V0.4375ZM0.15625 2.38281H1.13281V3.35938H0.15625V2.38281ZM2.10156 2.38281H3.07812V3.35938H2.10156V2.38281ZM4.04688 2.38281H5.02344V3.35938H4.04688V2.38281ZM6 2.38281H6.96875V3.35938H6V2.38281ZM7.94531 2.38281H8.92188V3.35938H7.94531V2.38281ZM9.89062 2.38281H10.8672V3.35938H9.89062V2.38281ZM1.13281 4.32812H2.10156V5.30469H1.13281V4.32812ZM3.07812 4.32812H4.04688V5.30469H3.07812V4.32812ZM5.02344 4.32812H6V5.30469H5.02344V4.32812ZM6.96875 4.32812H7.94531V5.30469H6.96875V4.32812ZM8.92188 4.32812H9.89062V5.30469H8.92188V4.32812ZM10.8672 4.32812H11.8359V5.30469H10.8672V4.32812ZM0.15625 6.28125H1.13281V7.25H0.15625V6.28125ZM2.10156 6.28125H3.07812V7.25H2.10156V6.28125ZM4.04688 6.28125H5.02344V7.25H4.04688V6.28125ZM6 6.28125H6.96875V7.25H6V6.28125ZM7.94531 6.28125H8.92188V7.25H7.94531V6.28125ZM9.89062 6.28125H10.8672V7.25H9.89062V6.28125ZM1.13281 8.22656H2.10156V9.20312H1.13281V8.22656ZM3.07812 8.22656H4.04688V9.20312H3.07812V8.22656ZM5.02344 8.22656H6V9.20312H5.02344V8.22656ZM6.96875 8.22656H7.94531V9.20312H6.96875V8.22656ZM8.92188 8.22656H9.89062V9.20312H8.92188V8.22656ZM10.8672 8.22656H11.8359V9.20312H10.8672V8.22656ZM0.15625 10.1719H1.13281V11.1484H0.15625V10.1719ZM4.04688 10.1719H5.02344V11.1484H4.04688V10.1719ZM6 10.1719H6.96875V11.1484H6V10.1719ZM7.94531 10.1719H8.92188V11.1484H7.94531V10.1719ZM9.89062 10.1719H10.8672V11.1484H9.89062V10.1719ZM2.10156 10.1719H3.07812V11.1484H2.10156V10.1719ZM10.8672 12.1172H11.8359V13.0938H10.8672V12.1172ZM8.92188 12.1172H9.89062V13.0938H8.92188V12.1172ZM6.96875 12.1172H7.94531V13.0938H6.96875V12.1172ZM5.02344 12.1172H6V13.0938H5.02344V12.1172ZM3.07812 12.1172H4.04688V13.0938H3.07812V12.1172ZM1.13281 12.1172H2.10156V13.0938H1.13281V12.1172ZM0.15625 14.0703H1.13281V15.0391H0.15625V14.0703ZM2.10156 14.0703H3.07812V15.0391H2.10156V14.0703ZM4.04688 14.0703H5.02344V15.0391H4.04688V14.0703ZM6 14.0703H6.96875V15.0391H6V14.0703ZM7.94531 14.0703H8.92188V15.0391H7.94531V14.0703ZM9.89062 14.0703H10.8672V15.0391H9.89062V14.0703ZM10.8672 16.0156H11.8359V16.9922H10.8672V16.0156ZM8.92188 16.0156H9.89062V16.9922H8.92188V16.0156ZM6.96875 16.0156H7.94531V16.9922H6.96875V16.0156ZM5.02344 16.0156H6V16.9922H5.02344V16.0156ZM3.07812 16.0156H4.04688V16.9922H3.07812V16.0156ZM1.13281 16.0156H2.10156V16.9922H1.13281V16.0156ZM0.15625 17.9609H1.13281V18.9375H0.15625V17.9609ZM2.10156 17.9609H3.07812V18.9375H2.10156V17.9609ZM4.04688 17.9609H5.02344V18.9375H4.04688V17.9609ZM6 17.9609H6.96875V18.9375H6V17.9609ZM7.94531 17.9609H8.92188V18.9375H7.94531V17.9609ZM9.89062 17.9609H10.8672V18.9375H9.89062V17.9609Z"
                    fill="black"
                  />
                </svg>
              </Span>
            </Button>
          </Box>

          <Box mb="4">
            <Button onClick={() => console.log("Downloading...")} disabled>
              <Span>Go</Span>
              <Span>→</Span>
            </Button>
          </Box>
          <Box mb="4">
            <Button onClick={() => console.log("Downloading...")} error>
              <Span>Error</Span>
              <span role="img" aria-label="Error">
                ⚠️
              </span>
            </Button>
          </Box>
        </Box>
      </Container>
    )
  }
}
