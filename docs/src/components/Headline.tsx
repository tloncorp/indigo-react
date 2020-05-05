import * as React from 'react'
import {
  Text,
  Row,
} from "indigo-react";

const Headline = ({intro, copy}) => (
  <Row expand alignItems='center' minHeight='13'>
    <Row maxWidth='14' p='7'>
      <Text bold gray fontSize='6'>
        <Text bold fontSize='6'>{intro}</Text>
        {copy}
      </Text>
    </Row>
  </Row>
);

export default Headline;
