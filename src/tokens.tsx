import { SystemStyleObject } from "@styled-system/css";

type SystemStyleObjects = {
  [key: string]: SystemStyleObject;
};

type SystemStyleProp =
  | string
  | string[]
  | number[]
  | (string & (string | number | symbol | null)[])
  | (string & {
      [x: string]: string | number | symbol | undefined;
      [x: number]: string | number | symbol | undefined;
    })
  | undefined;

const container = {
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as SystemStyleObject,
  centerX: {
    display: "flex",
    alignItems: "center",
  } as SystemStyleObject,
  centerY: {
    display: "flex",
    justifyContent: "center",
  } as SystemStyleObject,
};

const button = {
  state: {
    primary: {
      backgroundColor: "blue",
      color: "white",
      "*": { fill: "white" },
      borderColor: "blue",
    },
    primaryDisabled: {
      backgroundColor: "washedBlue",
      color: "lightBlue",
      "*": { fill: "lightBlue" },
      borderColor: "lightBlue",
    },
    default: {
      backgroundColor: "white",
      color: "black",
      "*": { fill: "black" },
      borderColor: "lightGray",
    },
    defaultDisabled: {
      backgroundColor: "washedGray",
      color: "lightGray",
      "*": { fill: "lightGray" },
      borderColor: "lightGray",
    },
    destructivePrimary: {
      backgroundColor: "red",
      color: "white",
      "*": { fill: "white" },
      borderColor: "red",
    },
    destructivePrimaryDisabled: {
      backgroundColor: "washedRed",
      color: "lightRed",
      "*": { fill: "lightRed" },
      borderColor: "lightRed",
    },
    destructive: {
      backgroundColor: "white",
      color: "red",
      "*": { fill: "red" },
      borderColor: "lightRed",
    },
    destructiveDisabled: {
      backgroundColor: "washedRed",
      color: "lightRed",
      "*": { fill: "lightRed" },
      borderColor: "lightRed",
    },
  } as SystemStyleObjects,
  text: {
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: 1.333334,
    fontWeight: 400,
    //   fontSize: 0, // Applied by <Reset />
  } as SystemStyleObject,
};

const action = {
  state: {
    default: {
      color: "blue",
      "*": { fill: "blue" },
    },
    defaultDisabled: {
      color: "lightGray",
      "*": { fill: "lightGray" },
    },
    destructive: {
      color: "red",
      "*": { fill: "red" },
    },
    destructiveDisabled: {
      color: "lightRed",
      "*": { fill: "lightRed" },
    },
  } as SystemStyleObjects,
};

export {
  // Core patterns
  container,
  // UI Patterns
  button,
  action,
  // Types
  SystemStyleProp,
  // Utils
};
