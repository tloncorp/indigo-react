import { SystemStyleObject } from "@styled-system/css";

type SystemStyleObjects = {
  [key: string]: SystemStyleObject;
};

export type SystemStyleProp =
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
      borderColor: "lightGray",
      color: "black",
      backgroundColor: "white",
    },
    disabled: {
      borderColor: "lightGray",
      color: "gray",
      backgroundColor: "washedGray",
    },
    hasError: {
      borderColor: "red",
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
  textInput,
  toggleSwitch,
  // Used for radio and checkbox
  indicator,
  // Utils
};
