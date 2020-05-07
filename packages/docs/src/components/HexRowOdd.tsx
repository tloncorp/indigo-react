import * as React from 'react'
import {
  Box,
  Row,
} from "@tlon/indigo-react";

const size =

const HexRowOdd = ({num, size, color}) => (
  <Row px='7'>
    {
      sequence(num).map(_ => (
        <Box
          size={size}
          borderRadius='100%'
          color={color}
        />
      ))
    }
  </Row>
)

export default HexRowOdd
