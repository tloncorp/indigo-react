import * as React from "react";
import {
  Rule,
  Col,
  TwoUp,
  FourUp,
  Max,
} from "@tlon/indigo-react";

import Headline from '../components/Headline'
import Subheading from '../components/Subheading'
import CopyBlock from '../components/CopyBlock'
import HexHero from '../components/HexHero'
import LibraryBlock from '../components/LibraryBlock'

import { links } from '../constants'

type Props = {
  matrix: null | number[][]
}

export default class Home extends React.Component<Props> {
  render() {
    const { props } = this

    return (
      <Col expand>
        <Rule/>
          <HexHero matrix={props.matrix}/>
        <Rule/>
        <Max>
          <Headline
            intro={'Indigo '}
            copy={'is a design system built and maintained by Tlon, the company creating Urbit, an operating system that powers a new, peer-to-peer internet. It is designed for maximum consistency, simplicity and legibility. It’s 100% open source and licensed under MIT.'} />
        </Max>
        <Rule/>
        <Max>
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
        </Max>
        <Rule/>
        <Max>
          <Col py='9'>
            <Subheading headline='Development' />
            <TwoUp pb='7'>
              <LibraryBlock
                title='Indigo React'
                version='1.3.7'
                copy='Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.'
                links={[
                  {text: 'NPM', to:links.reactNPM},
                  {text: 'Source', to:links.reactGithub},
                  {text: 'Component Catalog', to:'/catalog'},
                ]}/>
              <LibraryBlock
                title='Indigo Tokens'
                version='1.3.7'
                copy='Reusable, dynamic components for designing interfaces. Has high parity with Indigo implementations.'
                links={[
                  {text: 'NPM', to:links.tokensNPM},
                  {text: 'Source', to:links.tokensGithub},
                  {text: 'Theme Options', to:'/themes'},
                ]}/>
            </TwoUp>
            </Col>
          </Max>

      </Col>
    )
  }
}
