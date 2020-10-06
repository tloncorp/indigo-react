import * as React from "react";
import { Text } from "../index";

const Badge = (props) => (
  <Text
    backgroundColor="scales.black50"
    color="white"
    p="1"
    borderRadius="2"
    {...props}
  />
);

export default Badge;
