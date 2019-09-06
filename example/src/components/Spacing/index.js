import React from 'react'
import { Box, Flex, P, Ul, Li } from 'indigo-react'

const Spacing = () => (
  <React.Fragment>
      <Box flexBasis="40%">
        <P mb={[5]}>Token</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[4]}>size.0</Li>
          <Li height={[6]} mb={[4]}>size.1</Li>
          <Li height={[6]} mb={[4]}>size.2</Li>
          <Li height={[6]} mb={[4]}>size.3</Li>
          <Li height={[6]} mb={[4]}>size.4</Li>
          <Li height={[6]} mb={[4]}>size.5</Li>
          <Li height={[6]} mb={[4]}>size.6</Li>
          <Li height={[7]} mb={[4]}>size.7</Li>
          <Li height={[8]} mb={[4]}>size.8</Li>
          <Li height={[9]} mb={[4]}>size.9</Li>
          <Li height={[10]} mb={[4]}>size.10</Li>
          <Li height={[11]} mb={[4]}>size.11</Li>
          <Li height={[12]} mb={[4]}>size.12</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Value</P>
        <Ul fontFamily="mono">
          <Li height={[6]} mb={[4]}>0px</Li>
          <Li height={[6]} mb={[4]}>4px</Li>
          <Li height={[6]} mb={[4]}>8px</Li>
          <Li height={[6]} mb={[4]}>12px</Li>
          <Li height={[6]} mb={[4]}>16px</Li>
          <Li height={[6]} mb={[4]}>20px</Li>
          <Li height={[6]} mb={[4]}>24px</Li>
          <Li height={[7]} mb={[4]}>32px</Li>
          <Li height={[8]} mb={[4]}>48px</Li>
          <Li height={[9]} mb={[4]}>64px</Li>
          <Li height={[10]} mb={[4]}>96px</Li>
          <Li height={[11]} mb={[4]}>160px</Li>
          <Li height={[12]} mb={[4]}>288px</Li>
        </Ul>
      </Box>
      <Box flex="30%">
        <P mb={[5]}>Example</P>
        <Box height={[6]} mb={[4]}></Box>
        <Flex alignItems="center" height={[6]} mb={[4]}>
          <Box width={[1]} height={[1]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[6]} mb={[4]}>
          <Box width={[2]} height={[2]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[6]} mb={[4]}>
          <Box width={[3]} height={[3]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[6]} mb={[4]}>
          <Box width={[4]} height={[4]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[6]} mb={[4]}>
          <Box width={[5]} height={[5]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[6]} mb={[4]}>
          <Box width={[6]} height={[6]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[7]} mb={[4]}>
          <Box width={[7]} height={[7]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[8]} mb={[4]}>
          <Box width={[8]} height={[8]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[9]} mb={[4]}>
          <Box width={[9]} height={[9]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[10]} mb={[4]}>
          <Box width={[10]} height={[10]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[11]} mb={[4]}>
          <Box width={[11]} height={[11]} bg="gray.4"></Box>
        </Flex>
        <Flex alignItems="center" height={[12]} mb={[4]}>
          <Box width={[12]} height={[12]} bg="gray.4"></Box>
        </Flex>
      </Box>
  </React.Fragment>
)

export default Spacing
