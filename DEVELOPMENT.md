# Development

There are a few ways of making new components for Indigo. Let's cover some of the core patterns.

## Single Element Component with dynamic properties

Creating a basic theme-aware component with dynamic properties from scratch.

```tsx
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
// commonStyle includes all commonly used styled-system props
import { commonStyle, CommonStyleProps } from "./systemHelpers";

// Define property types and export typing
export type LabelProps = CommonStyleProps & {
  gray?: boolean;
  bold?: boolean;
  mono?: boolean;
};

// First, a we create a style object. Then, we pass it to css(), whcih converts values like fontSize:0 to fontSize:'12px'. The conversion is based on the theme. Css() returns a function that can be passed to styled.foo() as a StyleFn, like border, color, and flexbox imported from styled-system. This method is convinient because you don't have to pass the theme as a prop and write a bunch of template string functions for each dynamic property. We also assign prop defaults in the argument field.
const style = ({ gray = false, bold = false, mono = false }: LabelProps) =>
  css({
    fontWeight: bold ? "bold" : "regular",
    color: gray ? "gray" : "black",
    fontFamily: mono ? "mono" : "sans",
    display: "block",
    lineHeight: "short",
    fontSize: 0,
    pointerEvents: "none",
    userSelect: "none",
    verticalAlign: "middle",
    width: "100%",
  } as SystemStyleObject);

// Here, we define out component. Because we want this component to use an HTML <label>, we used styled.label and pass a series of styleFns to it. These essentially 'gather' the styles defined above and styles passed through props. They are then merged in a css class which is seen in the DOM as something like `sc-jFdnav`.
export const Label = styled.label<React.PropsWithChildren<LabelProps>>(
  style,
  ...commonStyle
);

// Add a displayName. It appears in the React devtools inspector and in errors. This is mandatory.
Label.displayName = "Label";
```

## Single Element Styled Component from Existing Component

Creating a styled component from an existing component, like one sourced from a 3rd party library.

```tsx
import { Form as FormikForm } from "formik";
import styled from "styled-components";
import { compose } from "styled-system";
import { structureStyle, StructureProps } from "./systemHelpers";

// Create and export property typing.
type ManagedFormProps = StructureProps;

// An existing component can be passed to styled() to create a styled component.
export const ManagedForm = styled(FormikForm)<
  React.PropsWithChildren<ManagedFormProps>
>({}, ...structureStyle);

ManagedForm.displayName = "ManagedForm";
```

## Composite React Component

This is a component made from several styled components imported from Indigo.

```tsx
import * as React from "react";
import { CommonStyleProps } from "./systemHelpers";
import { Row } from "./Row";
import { Col } from "./Col";

// Create and export the main component typing
export type TwoUpProps = CommonStyleProps &
  // Extend with this React typing so that the base component has div properties.
  React.HTMLAttributes<HTMLDivElement> & {
    // This is a special case where we overwrite `children` to be an array.
    children: React.ReactNodeArray;
  };

type ChildProps = CommonStyleProps & React.HTMLAttributes<HTMLDivElement>;

const Child = ({ children, ...props }: ChildProps) => (
  <Col width={["100%", "100%", "50%"]} {...props}>
    {children || <div />}
  </Col>
);

export const TwoUp = ({ children, ...props }: TwoUpProps) => (
  <Row flexDirection={["column", "row", "row"]} flexWrap="wrap" {...props}>
    <Child>{children[0] || <div />}</Child>
    <Child>{children[1] || <div />}</Child>
  </Row>
);

TwoUp.displayName = "TwoUp";
```

### Related

| Library      | Github                                    | NPM                                              |
| ------------ | ----------------------------------------- | ------------------------------------------------ |
| indigo-light | https://www.github.com/urbit/indigo-light | https://www.npmjs.com/package/@tlon/indigo-light |
| indigo-dark  | https://www.github.com/urbit/indigo-dark  | https://www.npmjs.com/package/@tlon/indigo-dark  |
| indigo-react | https://www.github.com/urbit/indigo-react | https://www.npmjs.com/package/@tlon/indigo-react |

### License

MIT License © [Tlon](https://tlon.io)
