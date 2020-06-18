import * as React from "react";
import {
  Input,
  Button,
  Icon,
  Text,
  Rule,
  Radio,
  InputLabel,
  Box,
  Checkbox,
  Row,
  Col,
  Spinner,
  TextArea,
  Tab,
  TabGroup,
} from "@tlon/indigo-react";



const Sandbox: React.FC = () => {

  return (
    <Col expand m='7'>
      <Row py='4'>
        <Text>Sandbox: Core</Text>
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
    </Col>
  );
};

export default Sandbox
