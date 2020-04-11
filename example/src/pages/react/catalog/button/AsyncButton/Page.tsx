import * as React from 'react'
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
  Svg,
  Img,
} from "indigo-react";

const code = `


`

export default class Hom\e extends React.Component {
  state = {
    code: code
  }

  render() {
    return (
      <Col>
        <Row>
          <Col>
            {
              // Render Example
            }
          </Col>
          <Col>
            {
              // Code
            }
          </Col>
        </Row>
        <Row>
          {
            // Props table
          }
        </Row>
      </Col>
    )
  }

}
