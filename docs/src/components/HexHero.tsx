import * as React from 'react'
import styled from 'styled-components'
import {
  Row,
  Col,
} from "@tlon/indigo-react";
import { useWindowSize } from '../hooks'
import { 
  isOdd,
  sequence,
  randomInt
} from '../utils'

const adj = 0.867

const styles = [
  ['blue1', 'blue1'],
  ['green1', 'green1'],
  ['yellow1', 'yellow1'],
  ['red1', 'red1'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
  ['white', 'black'],
]

const randomStyle = (p) => {
  const i = randomInt(0, styles.length-1)
  const bg = styles[i][0]
  const br = styles[i][1]
  return `
    background-color: ${p.theme.colors[bg]};
    border-color: ${p.theme.colors[br]};
  `
}

type DiscProps = {
  diameter: number
}

const Disc = styled.div<DiscProps>`
  width: ${p => p.diameter}px;
  height: ${p => p.diameter}px;
  min-width: ${p => p.diameter}px;
  min-height: ${p => p.diameter}px;
  max-width: ${p => p.diameter}px;
  max-height: ${p => p.diameter}px;
  border-radius: 100%;
  border-style: solid;
  border-width: 1px;
  ${
    p => randomStyle(p)
  }
`

const HexRowOdd = ({ num, diameter, i }) => (
  <Row position='relative' style={{transform: `translateY(${(i * diameter * adj)}px)`}}>
    <Row style={{transform: `translateX(${(diameter / 2)}px)`}} position='absolute'>
      { sequence(num - 1).map(_ => <Disc diameter={diameter} />) }
    </Row>
  </Row>
)

const HexRowEven = ({ num, diameter, i }) => (
  <Row position='relative' style={{transform: `translateY(${(i * diameter * adj)}px)`}}>
    <Row position='absolute'>
      { sequence(num).map(_ => <Disc diameter={diameter} />) }
    </Row>
  </Row>
)

const HexHero = (props) => {
  const width = useWindowSize().width || 0
  const cols = width > 1024
    ? 22
    : width  > 768
    ? 12
    : 8
  const rows = 11
  const diameter = Math.floor(((width - 32 - 32) / cols))

  return (
    <Row expand py='8' px='7' alignItems='center'>
      <Col height={(diameter * rows * adj) + 'px'}>
      {
        sequence(rows).map((_, i) => (
          isOdd(i)
            ? <HexRowOdd i={i} num={cols} diameter={diameter}/>
            : <HexRowEven i={i} num={cols} diameter={diameter}/>
        ))
      }
      </Col>
    </Row>
  )
}

export default HexHero
