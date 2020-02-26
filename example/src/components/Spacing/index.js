import React from 'react'
import { Box, Flex } from 'indigo-react'

const Spacing = () => (
  <React.Fragment>
      <Flex mb={[5]}>
        <Box width={[6/12]}>Token</Box>
        <Box width={[3/12]}>Value</Box>
        <Box width={[3/12]}>Example</Box>
      </Flex>
      <Box fontFamily="mono">
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.0</Box>
          <Box width={[3/12]}>0px</Box>
          <Box p={0} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.1</Box>
          <Box width={[3/12]}>4px</Box>
          <Box pr={1} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.2</Box>
          <Box width={[3/12]}>8px</Box>
          <Box pr={2} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.3</Box>
          <Box width={[3/12]}>16px</Box>
          <Box pr={3} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.4</Box>
          <Box width={[3/12]}>16px</Box>
          <Box pr={4} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.5</Box>
          <Box width={[3/12]}>20px</Box>
          <Box pr={5} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.6</Box>
          <Box width={[3/12]}>24px</Box>
          <Box pr={6} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.7</Box>
          <Box width={[3/12]}>32px</Box>
          <Box pr={7} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.8</Box>
          <Box width={[3/12]}>48px</Box>
          <Box pr={8} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.9</Box>
          <Box width={[3/12]}>64px</Box>
          <Box pr={9} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.10</Box>
          <Box width={[3/12]}>96px</Box>
          <Box pr={10} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.11</Box>
          <Box width={[3/12]}>160px</Box>
          <Box pr={11} bg="gray2"></Box>
        </Flex>
        <Flex mb={[5]} >
          <Box width={[6/12]}>size.12</Box>
          <Box width={[3/12]}>288px</Box>
          <Box pr={12} bg="gray2"></Box>
        </Flex>
      </Box>
  </React.Fragment>
)

export default Spacing
