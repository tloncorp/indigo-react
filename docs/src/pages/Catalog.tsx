import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

import {
  Row,
  Text,
  Rule
} from "@tlon/indigo-react";

export default class Catalog extends React.Component {
  render() {
    // let match = useRouteMatch();
    return (
      <Row flexWrap='wrap' minHeight='100vh'>
        <Rule />
        <Text>Catalog</Text>

      </Row>
    )
  }
}
