import * as React from "react";
import { Text, TextProps } from "./index";

type BadgeProps = TextProps;

export const Badge = (props: BadgeProps) => (
  <Text
    backgroundColor="scales.black50"
    // @ts-ignore
    color="white"
    height="20px"
    px="8px"
    py="2.5px"
    borderRadius="1"
    flex="0"
    verticalAlign="middle"
    {...props}
  />
);
