import * as React from 'react'
import {
  Box,
  Row,
} from "@tlon/indigo-react";

const sequence = (num:number) => Array.from(Array(num), (_, i) => i);

const size = 32

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
