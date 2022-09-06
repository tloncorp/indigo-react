# Development

## Getting Started

`npm install`

`npm install -g typescript` if you have never install TS

`npm run build`

There are a few ways of making new components for Indigo. Let's cover some of the core patterns.

## Component Patterns

### Single Element Component with dynamic properties

Creating a basic theme-aware component with dynamic properties from scratch.

```tsx
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
// commonStyle includes all commonly used styled-system props
import { commonStyle, CommonStyleProps } from "./system/unions";

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
    fontSize: 1,
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
import { structureStyle, StructureProps } from "./system/unions";

// Create and export property typing.
type ManagedFormProps = StructureProps;

// An existing component can be passed to styled() to create a styled component.
export const ManagedForm = styled(FormikForm)<
  React.PropsWithChildren<ManagedFormProps>
>({}, ...structureStyle);

ManagedForm.displayName = "ManagedForm";
```

### Composite React Component

This is a component made from several styled components imported from Indigo.

```tsx
import * as React from "react";
import { CommonStyleProps } from "./system/unions";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

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

## Scripts

`npm run build` Builds the library with `esbuild` and constructs typings with `tsc`

`npm run esbuild` Builds the library with `esbuild` but skips generating typings. Typings take a long time to generate, so if you havn't changed your type definitons, this can rapidly speed up iteration time for visual polish tasks.

`npm run reset` Removes node_modules and package-lock.json and npm installs fresh

### Related

| Library      | Github                                    | NPM                                              |
| ------------ | ----------------------------------------- | ------------------------------------------------ |
| indigo-light | https://www.github.com/urbit/indigo-light | https://www.npmjs.com/package/@tlon/indigo-light |
| indigo-dark  | https://www.github.com/urbit/indigo-dark  | https://www.npmjs.com/package/@tlon/indigo-dark  |
| indigo-react | https://www.github.com/urbit/indigo-react | https://www.npmjs.com/package/@tlon/indigo-react |

## Icons

To view a gallery of supported Indigo icons, add the following test component to your project:
```ts
import { Box, Icon, Text } from '@tlon/indigo-react';
import { _iconIndex as iconIndex } from '@tlon/indigo-react';

export const Gallery = () => {
  const iconNames = Object.keys(iconIndex);
  return (
    <>
      {iconNames.map(name => {
        return (
          <>
            <Box p={5} mx={5} border={'solid 1px rgba(0,0,0,0.5)'}>
              <Text>{name}</Text>&nbsp;
              <Icon icon={name} height={'24px'} width={'24px'} />
            </Box>
          </>
        );
      })}
    </>
  );
};

```

### License

MIT License © [Tlon](https://tlon.io)
