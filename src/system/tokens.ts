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
      backgroundColor: "washedGray",
      color: "blue",
      "&:hover": {
        backgroundColor: "lightBlue",
      },
      // "*": { fill: "white" },
      // borderColor: "blue",
    },
    primaryDisabled: {
      backgroundColor: "lightGray",
      color: "gray",
      // "*": { fill: "lightBlue" },
      // borderColor: "lightBlue",
    },
    default: {
      backgroundColor: "washedGray",
      color: "black",
      "&:hover": {
        backgroundColor: "lightGray",
      },
      "&:focus-visible": {
        outline: "2px solid",
        outlineColor: "lightBlue",
      },
      // "*": { fill: "black" },
      // borderColor: "lightGray",
    },
    defaultDisabled: {
      backgroundColor: "washedGray",
      color: "lightGray",
      // "*": { fill: "lightGray" },
      // borderColor: "lightGray",
    },
    // destructivePrimary: {
    //   backgroundColor: "red",
    //   color: "white",
    //   '&:hover': {
    //     backgroundColor: "darkRed",
    //   }
    //   // "*": { fill: "white" },
    //   // borderColor: "red",
    // },
    // destructivePrimaryDisabled: {
    //   backgroundColor: "washedRed",
    //   color: "lightRed",
    //   // "*": { fill: "lightRed" },
    //   // borderColor: "lightRed",
    // },
    destructive: {
      backgroundColor: "washedGray",
      color: "red",
      "&:hover": {
        backgroundColor: "lightRed",
      },
      // '&:focus-visible': {
      //   outline: '2px solid',
      //   outlineColor: 'lightRed'
      // }
      // "*": { fill: "red" },
      // borderColor: "red",
    },
    destructiveDisabled: {
      backgroundColor: "washedRed",
      color: "lightRed",
      // "*": { fill: "lightRed" },
      // borderColor: "lightRed",
    },
  } as SystemStyleObjects,
  text: {
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "short",
    fontWeight: 500,
    userSelect: "none",
    fontSize: 1,
    fontFamily: "sans",
    textDecoration: "none",
  } as SystemStyleObject,
};

const action = {
  state: {
    default: {
      color: "black",
      // background: "white",
      "&:hover": {
        color: "black",
        backgroundColor: "washedGray",
      },
      // "*": { fill: "blue" },
    },
    primary: {
      color: "blue",
      // background: "white",
      "&:hover": {
        color: "blue",
        backgroundColor: "washedBlue",
      },
      // "*": { fill: "blue" },
    },
    defaultDisabled: {
      color: "lightGray",
      // background: "white",
      // "*": { fill: "lightGray" },
    },
    destructive: {
      color: "red",
      // background: "white",
      "&:hover": {
        // color: "darkRed",
        backgroundColor: "washedRed",
      },
      // "*": { fill: "red" },
    },
    destructiveDisabled: {
      color: "lightRed",
      // background: "white",
      // "*": { fill: "lightRed" },
    },
  } as SystemStyleObjects,
  text: {
    textAlign: "left",
    verticalAlign: "middle",
    lineHeight: "short",
    fontWeight: 500,
    userSelect: "none",
    fontSize: 1,
    fontFamily: "sans",
    textDecoration: "none",
  } as SystemStyleObject,
};

const indicator = {
  state: {
    on: {
      "*": { fill: "white" },
      backgroundColor: "blue",
      borderColor: "blue",
    },
    off: {
      "*": { fill: "transparent" },
      backgroundColor: "white",
      borderColor: "lightGray",
    },
    onError: {
      "*": { fill: "white" },
      backgroundColor: "red",
      borderColor: "red",
    },
    offError: {
      "*": { fill: "transparent" },
      backgroundColor: "washedRed",
      borderColor: "red",
    },
    offDisabled: {
      "*": { fill: "transparent" },
      backgroundColor: "washedGray",
      borderColor: "lightGray",
    },
    onDisabled: {
      "*": { fill: "lightGray" },
      backgroundColor: "washedGray",
      borderColor: "lightGray",
    },
  } as SystemStyleObjects,
};

const selectorDefaults = {
  display: "block",
  position: "absolute",
  padding: "6px",
  borderRadius: "999px",
  border: "1px solid",
  // content property `' '` must be wrapped in quotes.
  content: "' '",
};

const toggleSwitch = {
  states: {
    selected: {
      backgroundColor: "blue",
      borderColor: "transparent",
      "&::before": {
        // Note that `border-color` must come after `border`.
        ...selectorDefaults,
        backgroundColor: "white",
        borderColor: "transparent",
        transform: "translateX(8px)",
      },
    },
    default: {
      backgroundColor: "lightGray",
      borderColor: "transparent",
      "&::before": {
        ...selectorDefaults,
        borderColor: "transparent",
        backgroundColor: "white",
      },
    },
    selectedDisabled: {
      backgroundColor: "lightGray",
      borderColor: "transparent",
      "&::before": {
        ...selectorDefaults,
        backgroundColor: "scales.white70",
        borderColor: "transparent",
        transform: "translateX(8px)",
      },
    },
    hasErrorSelected: {
      backgroundColor: "red",
      borderColor: "transparent",
      "&::before": {
        ...selectorDefaults,
        backgroundColor: "white",
        borderColor: "transparent",
        transform: "translateX(8px)",
      },
    },
    hasError: {
      backgroundColor: "red",
      borderColor: "transparent",
      "&::before": {
        ...selectorDefaults,
        borderColor: "transparent",
        backgroundColor: "white",
      },
    },
    disabled: {
      backgroundColor: "lightGray",
      borderColor: "transparent",
      "&::before": {
        ...selectorDefaults,
        borderColor: "transparent",
        backgroundColor: "scales.white70",
      },
    },
  } as SystemStyleObjects,
};

const textInput = {
  state: {
    default: {
      border: "none",
      color: "black",
      backgroundColor: "washedGray",
      // '&:focus': {
      //   backgroundColor: "washedBlue",
      // },
      "&:focus": {
        // boxShadow: `0px 0px 0px 2px ${p => p.theme.colors.lightBlue}`,
        // boxShadowColor: 'lightBlue',
        // // outline: '2px solid',
        // // outlineColor: 'lightBlue',
        // // outlineRadius: '4px',
        backgroundColor: "washedBlue",
      },
    },
    disabled: {
      border: "none",
      // borderColor: "lightGray",
      color: "gray",
      backgroundColor: "washedGray",
    },
    hasError: {
      border: "none",
      // borderColor: "red",
      color: "red",
      backgroundColor: "washedRed",
    },
  } as SystemStyleObjects,
  text: {
    textAlign: "left",
    lineHeight: "short",
    fontWeight: 400,
    fontSize: 1,
    fontFamily: "sans",
    textDecoration: "none",
  } as SystemStyleObject,
};

export {
  // Core patterns
  container,
  // UI Patterns
  button,
  action,
  textInput,
  toggleSwitch,
  // Used for radio and checkbox
  indicator,
  // Types
  SystemStyleProp,
  // Utils
};
