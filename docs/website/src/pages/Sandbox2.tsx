import * as React from "react";
import {
  Input,
  Button,
  Icon,
  Text,
  Rule,
  Code,
  Radio,
  InputLabel,
  Box,
  Checkbox,
  Row,
  Anchor,
  Col,
  Spinner,
  TextArea,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@tlon/indigo-react";



const Sandbox: React.FC = () => {

  return (
    <Col m='7'>
      <Row py='4'>
        <Text>Sandbox: Buttons</Text>
      </Row>

      <Row mt='4'>
        <Button mr='2'>Comment</Button>
        <Button mr='2' border>Create Repository</Button>
        <Button mr='2' border><Icon mr='1' icon='ChevronSouth'/>Select Channel</Button>
        <Button mr='2' border>Select Color<Icon mr='1' icon='ChevronSouth'/></Button>
      </Row>

      <Row mt='4'>
        <Button primary mr='2'>Comment</Button>
        <Button primary mr='2' border>Create Repository</Button>
        <Button primary mr='2' border><Icon mr='1' icon='ChevronSouth'/>Select Channel</Button>
        <Button primary mr='2' border>Select Color<Icon mr='1' icon='ChevronSouth'/></Button>
      </Row>

      <Row mt='4'>
        <Button error mr='2'>Comment</Button>
        <Button error mr='2' border>Create Repository</Button>
        <Button error mr='2' border><Icon mr='1' icon='ChevronSouth'/>Select Channel</Button>
        <Button error mr='2' border>Select Color<Icon mr='1' icon='ChevronSouth'/></Button>
      </Row>

      <Row py='4'>
        <Text>Sandbox: Controls</Text>
      </Row>

      <Disclosure>
        <DisclosureButton>
          Open
        </DisclosureButton>
        <DisclosurePanel>
          <Text>Hi</Text>
        </DisclosurePanel>
      </Disclosure>

      <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>one!</Text>
        </TabPanel>
        <TabPanel>
          <Text>two!</Text>
        </TabPanel>
        <TabPanel>
          <Text>three!</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>

      <Row py='4'>
        <Text>Sandbox: Core</Text>
      </Row>

      <Anchor href='www.urbit.org'>Urbit</Anchor>
      <Code>Here is some Code</Code>
    </Col>
  );
};

export default Sandbox
