import React from 'react';
import styled from 'styled-components';
import { LayoutProps, SpaceProps } from 'styled-system';
import Box from '../../primitives/Box';
import Flex from '../../primitives/Flex';
import Text from '../../primitives/Text';
import Button from '../buttons/Button';
import Icon from '../icon/Icon';
// import Flex from '../../primitives/Flex'

type Props = LayoutProps &
  SpaceProps & {
    children: any;
  };

type State = {
  open: boolean;
};

const SideBar = styled(Box)`
  height: 100%;
  min-width: 256px;
  max-width: 256px;
  border-right: 1px solid gray;
`;

const Background = styled(Box)`
  background-color: ${props => {
    if (props.theme.mode === 'dark') return props.theme.colors.black;
    return props.theme.colors.white;
  }};
  height: 100%;
  display: flex;
`;

class SourceListView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { open: true };
    this.openSourceList = this.openSourceList.bind(this);
    this.closeSourceList = this.closeSourceList.bind(this);
    this.toggleSourceList = this.toggleSourceList.bind(this);
  }

  openSourceList() {
    this.setState({ open: true });
  }

  closeSourceList() {
    this.setState({ open: false });
  }

  toggleSourceList() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Background {...this.props}>
        <SideBar display={this.state.open ? '' : 'none'}>
          <Flex flexDirection="row-reverse">
            <Button sm m="2" onClick={this.closeSourceList}>
              <Icon icon="ChevronWest" />
            </Button>
          </Flex>
          <Text>source list</Text>
        </SideBar>
        <Box height="100%" width="100%">
          <Flex>
            <Button
              sm
              m="2"
              onClick={this.openSourceList}
              display={this.state.open ? 'none' : ''}
            >
              <Icon icon="ChevronEast" />
            </Button>
          </Flex>
          <Text>view</Text>
        </Box>
      </Background>
    );
  }
}

export default SourceListView;