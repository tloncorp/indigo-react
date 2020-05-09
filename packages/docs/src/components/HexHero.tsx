import * as React from 'react'
import styled from 'styled-components'
import {
  Row,
  Col,
} from "@tlon/indigo-core";
// import hero from '../assets/Hero.png'

const size = 60
const rows = 11

const isOdd = (n:number) => Math.abs(n % 2) == 1;
const sequence = (num:number) => Array.from(Array(num), (_, i) => i);
const randomInt = (mn:number, mx:number) => {
  return Math.floor(Math.random() * (mx - mn + 1) + mn)
};

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

const Disc = styled.div`
  width: ${size}px;
  height: ${size}px;
  min-width: ${size}px;
  min-height: ${size}px;
  max-width: ${size}px;
  max-height: ${size}px;
  border-radius: 100%;
  border-style: solid;
  border-width: 1px;
  ${
    p => randomStyle(p)
  }

`

const HexRowOdd = ({ num }) => (
  <Row pl={(size / 2) + 'px'} position='relative' height='52px'>
    <Row position='absolute'>
      { sequence(num - 1).map(_ => <Disc />) }
    </Row>
  </Row>
)

const HexRowEven = ({ num }) => (
  <Row position='relative' height='52px'>
    <Row position='absolute'>
      { sequence(num).map(_ => <Disc />) }
    </Row>
  </Row>
)

const HexHero = () => {
  const cols = Math.floor((window.innerWidth - 32 - 32) / size)
  return (
    <Row expand py='8' px='7' alignItems='center'>
      <Col width={(cols * size) + 'px'}>
      {
        sequence(rows).map((_, i) => (
          isOdd(i)
            ? <HexRowOdd num={cols} />
            : <HexRowEven num={cols} />
        ))
      }
      </Col>
    </Row>
  )
}

export default HexHero
