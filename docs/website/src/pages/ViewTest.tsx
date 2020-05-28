import * as React from "react";
import { Box, Row, Text, View, Col, Frame, IconButton, Icon} from "@tlon/indigo-react";

const list = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
]

const Sourcelist = ({listItems}) => {
  return (
    <Col display='relative'>
      <Row height='8' top='0' position='sticky' backgroundColor='white' borderBottom='1px solid silver' borderBottomColor='gray1' px='4' alignItems='center'>
        <Text>Title</Text>
      </Row>
      {
        listItems.map(item =>
          <Row height='96px' p='4' borderBottom='1px solid silver' borderBottomColor='gray1'>
            <Text>{item}</Text>
          </Row>
        )
      }
    </Col>
  )
}

const TopBar = (props) => (
  <Row minHeight='7' height='7' my='4' alignItems='center'>
    <Icon icon='Bullet' />
  </Row>
)

export default class ViewTest extends React.Component {
  state = {
    open: true
  }

  toggleSidebar() {
    this.setState({open: !this.state.open})
  }

  render() {
    const { state} = this;
    return (
      <Frame
        topBarContents={
          <TopBar>
            <Icon icon='Bullet' />
          </TopBar>
        }
      >
        <View
          sideBarOpen={state.open}
          sideBarContents={
            <Sourcelist listItems={list} />
          }>
          <Row borderBottom='1px solid silver' borderBottomColor='gray1' height='8' width='100%' px='4' alignItems='center'>
            <IconButton
              sm
              onClick={() => this.toggleSidebar()}
              icon={state.open ? 'ChevronWest' : 'ChevronEast'} />
              <Text ml='4'>Urbit Help</Text>
              <Text ml='4' gray>Settings</Text>

          </Row>
          <Col p='4'>
          </Col>
        </View>
      </Frame>
    )
  }
}
