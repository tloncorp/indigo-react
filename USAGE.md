# Using indigo-react

## Installing dependencies

```
npm install --save indigo-react
```

Install peer dependencies

```
npm install --save styled-components @reach/menu-button
```

## Setting up your project

```
import React, { Component } from "react";
import { H1 } from 'indigo-react';
import theme from 'indigo-tokens';
import styled, { ThemeProvider } from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <H1>Urbit</H1>
      </ThemeProvider>
    );
  }
}
export default App;
```

In the above, we are wrapping our application in styled-component's `ThemeProvider` and passing in our `theme` from `indigo-tokens`.

_Do you need to reset styles for browser compatibility or set some global styles? This might be the place to do it. Check out `Style` and `Root` in `/example/src/App.js`._

## Using components

You are now able to use any of the following components: `H1`-`H6`, `StyledCode`, `StyledA`, `Span`, `P`, `Ul`, `Ol`, `Li`, `Img`, `Flex`, `FieldSuccess`, `FieldError`, `FieldInput`, `Dropdown`, `Container`, `Button`, `Box`, and `Loading` (icon).

## Component Props

Each component takes specific props.

If we look at `<P>`:

```
import styled from "styled-components";

import { color, layout, space, typography, compose } from "styled-system";

const P = styled.p`
  ${compose(
    color,
    layout,
    space,
    typography
  )}
`;

export default P;

P.defaultProps = {
  fontSize: 2,
  lineHeight: "regular"
};
```

We see that `<P>` accepts `color`, `layout`, `space`, and `typography` props.

The `space` utility from `styled-system` includes props for all CSS properties for padding and margin (and shorthand) :

- `margin`, `m` margin
- `marginTop`, `mt` margin-top
- `marginRight`, `mr` margin-right
- `marginBottom`, `mb` margin-bottom
- `marginLeft`, `ml` margin-left
- `marginX`, `mx` margin-left and margin-right
- `marginY`, `my` margin-top and margin-bottom
- `padding`, `p` padding
- `paddingTop`, `pt` padding-top
- `paddingRight`, `pr` padding-right
- `paddingBottom`, `pb` padding-bottom
- `paddingLeft`, `pl` padding-left
- `paddingX`, `px` padding-left and padding-right
- `paddingY`, `py` padding-top and padding-bottom

So, if we wanted to apply 16px of margin-top to a `<P>`, we should do:

```
<P mt="16px">Urbit is your last computer.</P>
```

You can look at the API reference for the styled-system props here: https://styled-system.com/api

## Using theme values

Each one of the above props can pull values from our theme for design consistency.

In `<P>`, you might have noticed the `defaultProps` for `fontSize` was set to `2`.:

```
import styled from "styled-components";

import { color, layout, space, typography, compose } from "styled-system";

const P = styled.p`
  ${compose(
    color,
    layout,
    space,
    typography
  )}
`;

export default P;

P.defaultProps = {
  fontSize: 2,
  lineHeight: "regular"
};
```

This is not 2px, but rather a reference to a value within our theme.

When looking in our theme (indigo-tokens), we see that we have the following values for `fontSize`:

```
fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
```

So, the `2` corresponds to 16(px) here.

Each prop type pulls from specific values within the theme.

For example:

- `space` values like `marginLeft`, `mr`, and `paddingTop` pull from the `space` property of our theme
- `color` values like `color`, `bgColor`, and `backgroundColor` pull from the `colors` property of our theme.

To see how props map to values in our theme, check out styled-system's mapping: https://styled-system.com/table

You may still use custom props here, for example: you might find yourself on a project looking to use a font size not specified in the theme. You could do the following:

```
<P fontSize="7px">Urbit is your last computer.</P>
```

Consult a designer.

## Default Props

Some components have default props (seen above), these can be overridden by specifying a new prop value.
