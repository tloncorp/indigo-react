import * as React from "react";

import {
  Box,
  Row,
  Rule,
  Text,
  Col,
  Center,
  ItemRow,
  Space,
  Code,
  Icon,
  Anchor,
  BackgroundImage,
  styleAnchor,
  Svg,
  Img,
} from "indigo-react";

import Headline from '../components/Headline'
import Subheading from '../components/Subheading'
import TwoUp from '../components/TwoUp'
import FourUp from '../components/FourUp'
import CopyBlock from '../components/CopyBlock'
import Footer from '../components/Footer'
import Limiter from '../components/Limiter'
import HexHero from '../components/HexHero'

const duri = svg => `data:image/svg+xml;base64,${btoa(svg)}`
const sequence = (num:number) => Array.from(Array(num), (_, i) => i);

// const Item = props => (
//   <Box p='7' py='10'>
//     <Space pb='2'>
//       <Row alignItems='baseline' flexWrap='wrap'>
//         <Text fontSize='4' mr='2'>{props.title}</Text>
//         <Code borderRadius='2' mr='2' fontSize='3'>{props.version}</Code>
//         <Code borderRadius='2'  fontSize='3'>{props.stage}</Code>
//       </Row>
//       <Text fontSize='4' gray>{props.description}</Text>
//       <Col>
//         {
//           props.links.map(link => (
//             <Anchor target='_blank' gray fontSize='4' my='1' href={link[1]}>
//               <Row alignItems='center'>
//                 {link[0]}
//               </Row>
//             </Anchor>
//           ))
//         }
//       </Col>
//     </Space>
//   </Box>
// );
//
// const Footer = () => (
//   <Row p='7'>
//     <Text gray fontSize='3'>Copyright © 2020 Tlon Inc.</Text>
//   </Row>
// )

export default class Home extends React.Component {
  render() {
    return (
      <Col expand>
        <Rule/>
          <HexHero />
        <Rule/>
        <Limiter>
          <Headline
            intro={'Indigo '}
            copy={'is a design system built and maintained by Tlon, the company creating Urbit, an operating system that powers a new, peer-to-peer internet. It is designed for maximum consistency, simplicity and legibility. It’s 100% open source and licensed under MIT.'} />
        </Limiter>
        <Rule/>
        <Limiter>
          <Col py='9'>
            <Subheading headline='Design' />
            <TwoUp pb='7'>
              <CopyBlock
                title='Design Language'
                copy='Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.' />
              <CopyBlock
                title='User Interface Guidelines'
                copy='Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.' />
            </TwoUp>
          </Col>
        </Limiter>
        <Rule/>
        <Limiter>
          <Col py='9'>
            <Subheading headline='Development' />
            <FourUp pb='7'>
              <CopyBlock
                title='Design Language'
                copy='Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.' />
              <CopyBlock
                title='User Interface Guidelines'
                copy='Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.' />
              <CopyBlock
                title='Design Language'
                copy='Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.' />
              <CopyBlock
                title='User Interface Guidelines'
                copy='Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.' />
            </FourUp>
            </Col>
          </Limiter>
        <Rule/>
        <Footer />
      </Col>
    )
  }
}
