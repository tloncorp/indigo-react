# indigo-react
[![npm (scoped)](https://img.shields.io/npm/v/@tlon/indigo-react?style=plastic)](https://www.npmjs.com/package/@tlon/indigo-react)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/urbit/indigo-react?style=plastic)](https://www.github.com/urbit/indigo-react)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@tlon/indigo-react?style=plastic)](https://www.npmjs.com/package/@tlon/indigo-react)
![NPM](https://img.shields.io/npm/l/@tlon/indigo-react?style=plastic)

Related: [indigo-tokens](https://www.github.com/urbit/indigo-tokens),
[indigo-static](https://www.github.com/urbit/indigo-static)

## Quick Start

```
npm install --save @tlon/indigo-react
```

Install peer dependencies

```
npm install --save @tlon/indigo-tokens styled-components styled-system react react-dom
```

If you need forms, install `formik` and `yup`

```
npm install --save formik yup
```

#### Setting up your project

```js
import * as React from "react";
import { Text } from '@tlon/indigo-react';
import theme from '@tlon/indigo-tokens';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Text fontSize='4'>Urbit</Text>
      </ThemeProvider>
    );
  }
}
```

In the above, we are wrapping our application in styled-component's `ThemeProvider` and passing in our `theme` from `@tlon/indigo-tokens`.

_Do you need to reset styles for browser compatibility or set some global styles? This might be the place to do it. Check out `Style` and `Root` in `/example/src/App.js`._

#### Component Props

Each component takes specific props.

If we look at `<Text>`:

```ts
import styled from 'styled-components';

import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system';

type Props = ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    gray?: boolean;
    bold?: boolean;
    mono?: boolean;
  };

const Text = styled.div<Props>`
  color: ${p => (p.gray ? p.theme.colors.gray5 : p.theme.colors.black)};

  font-weight: ${p => (p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular)};

  font-family: ${p => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};

  ${compose(color, layout, space, typography)};
`;

Text.defaultProps = {
  lineHeight: 'short',
  fontWeight: 400,
  fontSize: 2,
};

export default Text;
export {Props};
```

We see that `<Text>` accepts `color`, `layout`, `space`, and `typography` props.

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

So, if we wanted to apply 16px of margin-top to a `<Text>`, we should do:

```
<Text mt="16px">Urbit is your last computer.</Text>
```

You can look at the API reference for the styled-system props here: https://styled-system.com/api

#### Using theme values

Each one of the above props can pull values from our theme for design consistency.

In `<Text>`, you might have noticed the `defaultProps` for `fontSize` was set to `2`.:

```ts
...

Text.defaultProps = {
  lineHeight: 'short',
  fontWeight: 400,
  fontSize: 2,
};

export default Text;
export {Props};
```

This is not 2px, but rather a reference to a value within our theme.

When looking in our theme (indigo-tokens), we see that we have the following values for `fontSize`:

```
fontSizes: [10, 11, 12, 14, 16, 20, 24, 32, 48, 64, 72],
```

So, the `2` corresponds to 12(px) here.

Each prop type pulls from specific values within the theme.

For example:

- `space` values like `marginLeft`, `mr`, and `paddingTop` pull from the `space` property of our theme
- `color` values like `color`, `bgColor`, and `backgroundColor` pull from the `colors` property of our theme.

To see how props map to values in our theme, check out styled-system's mapping: https://styled-system.com/table

You may still use custom props here, for example: you might find yourself on a project looking to use a font size not specified in the theme. You could do the following:

```js
<Text fontSize="7px">Urbit is your last computer.</Text>
```

Consult a designer.

#### Default Props

Some components have default props (seen above), these can be overridden by specifying a new prop value.


## Component Docs

**Component Documentation**
- [Buttons](https://github.com/urbit/indigo-react/tree/master/src/components/buttons)
- [Form](https://github.com/urbit/indigo-react/tree/master/src/components/form)
- [Icon](https://github.com/urbit/indigo-react/tree/master/src/components/icon)
- [Layout](https://github.com/urbit/indigo-react/tree/master/src/components/layout)
- [Navigation (coming soon)](https://github.com/urbit/indigo-react/tree/master/src/components/navigation)
- [Text](https://github.com/urbit/indigo-react/tree/master/src/components/text)
- [View (coming soon)](https://github.com/urbit/indigo-react/tree/master/src/components/view)

Indigo is built with [styled-components](https://styled-components.com/), [styled-system](https://styled-system.com/) and [formik](https://jaredpalmer.com/formik/docs/overview).

**Styled Components**
- Allows writing 'CSS' in JS with template string via `styled.div` etc.
- Transforms these strings into class names.

**Styled System**
- Provides notion of a 'Theme' if given a `theme.js` or `indigo-tokens`.
- Knows how to take a prop named `p` or `padding` and look for a relevant value in the `theme`. Knows how to differentiate a value like `p='4'` (targets the theme) vs `p='4px'` (uses 4px).

For a more in-depth tutorial, see [Usage.md](https://github.com/urbit/indigo-react/tree/master/Usage.md).

**Styled System Property Reference**
- [Space](https://styled-system.com/table#space)
- [Color](https://styled-system.com/table#color)
- [Typography](https://styled-system.com/table#typography)
- [Layout](https://styled-system.com/table#layout)
- [Flexbox](https://styled-system.com/table#flexbox)
- [Grid](https://styled-system.com/table#grid-layout)
- [Background](https://styled-system.com/table#background)
- [Border](https://styled-system.com/table#border)
- [Position](https://styled-system.com/table#position)
- [Shadow](https://styled-system.com/table#shadow)

### Development

Work in Progress

The react library comes with an example site (create-react-app) where your components are available as you develop. You can use this as a playground for new ideas, a documentation site, or a learning resource for other developers.

[Benefits of CSS-in-JS](https://www.robinwieruch.de/react-styled-components)


### License
MIT © [urbit](https://github.com/urbit)
