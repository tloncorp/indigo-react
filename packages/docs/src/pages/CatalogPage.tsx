import * as React from "react";

import {
  Row,
  Text
} from "@tlon/indigo-core";

// const sequence = num => Array.from(Array(num), (_, i) => i);


export default class CatalogPage extends React.Component {
  render() {
    // let { componentId } = useParams();
    console.log(this.props)
    return (
      <Row flexWrap='wrap'>
        <Text>Component Page</Text>
      </Row>
    )
  }
}
