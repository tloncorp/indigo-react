import React from "react";
import { Box, Row, Text, View, Col, Frame, Button} from "indigo-react";

const list = [
  1,2,3,4,5,6,7,8,
]

const SideBarContents = ({listItems}) => {
  return (
    <Col>
      <Row height='6'>
        Title
      </Row>
      {
        listItems.map(item =>
          <Row>
            <Text>{item}</Text>
          </Row>
        )
      }
    </Col>
  )
}

export default class ViewTest extends React.Component {
  state = {
    open: true
  }

  toggleSidebar() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <Frame>
        <View
          sideBarOpen={this.state.open}
          sideBarContents={
            <SideBarContents listItems={list} />
          }>
          <Text>Main</Text>
          <Button onClick={() => this.toggleSidebar()}>
            Toggle Sidebar
          </Button>
        </View>
      </Frame>
    )
  }
}
