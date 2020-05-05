import * as React from "react";

import {
  Box,
  Row,
  Button,
  Icon,
} from "indigo-react";

const sequence = num => Array.from(Array(num), (_, i) => i);


export default class Home extends React.Component {
  render() {
    return (
      <Row flexWrap='wrap'>
        {
          sequence(1000).map((_, idx) => {
            return <>
              <Button caution m='2'><Icon icon='X' mr='1'/>Cancel</Button>
              <Button m='2'>Ok</Button>
              <Button primary m='2'>Continue</Button>
              <Button disabled m='2'>Disabled</Button>
            </>
          })
        }

      </Row>
    )
  }
}
