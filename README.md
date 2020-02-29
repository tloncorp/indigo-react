# indigo-react
![npm (scoped)](https://img.shields.io/npm/v/@tlon/indigo-react?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/min/@tlon/indigo-react?style=plastic)
![NPM](https://img.shields.io/npm/l/@tlon/indigo-react?style=plastic)

[Github Repo](https://www.github.com/urbit/indigo-tokens)

---
##### Related
[Indigo Tokens on GitHub](https://www.github.com/urbit/indigo-tokens)

[indigo-static on GitHub](https://www.github.com/urbit/indigo-static)

---

## Quick Start

```
npm install --save @tlon/indigo-react
```

Install peer dependencies

```
npm install --save @tlon/indigo-tokens styled-components styled-system react react-dom
```

**Example**
```js
import React, { Component } from "react";
import { H1 } from 'indigo-react';
import theme from 'indigo-tokens';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <H1>Urbit</H1>
        <Test/>
      </ThemeProvider>
    );
  }
}
export default App;
```
## Component Docs
Indigo is built with [styled-components](https://styled-components.com/), [styled-system](https://styled-system.com/) and [formik](https://jaredpalmer.com/formik/docs/overview).

[Buttons](https://github.com/urbit/indigo-react/tree/master/src/components/buttons)

[Form](https://github.com/urbit/indigo-react/tree/master/src/components/form)

[Icon](https://github.com/urbit/indigo-react/tree/master/src/components/icon)

[Layout](https://github.com/urbit/indigo-react/tree/master/src/components/layout)

[Navigation (coming soon)](https://github.com/urbit/indigo-react/tree/master/src/components/navigation)

[Text](https://github.com/urbit/indigo-react/tree/master/src/components/text)

[View (coming soon)](https://github.com/urbit/indigo-react/tree/master/src/components/view)

## Development

```
$ npm run install
$ npm run start
```

#### Styled Components and Styled System
Styled Components and Styled System are separate but related libraries. Here is what each does.

Styled Components
- Allows writing 'CSS' in JS with template string via `styled.div` etc.
- Transforms these strings into class names.

Styled System
- Provides notion of a 'Theme' if given a `theme.js` or `indigo-tokens`.
- Knows how to take a prop named `p` or `padding` and look for a relevant value in the `theme`. Knows how to differentiate a value like `p='4'` (targets the theme) vs `p='4px'` (uses 4px).

#### Styled System Reference
[SpaceProps](https://styled-system.com/table#space)

[ColorProps](https://styled-system.com/table#color)

[TypographyProps](https://styled-system.com/table#typography)

[LayoutProps](https://styled-system.com/table#layout)

[FlexboxProps](https://styled-system.com/table#flexbox)

[GridProps](https://styled-system.com/table#grid-layout)

[BackgroundProps](https://styled-system.com/table#background)

[BorderProps](https://styled-system.com/table#border)

[PositionProps](https://styled-system.com/table#position)

[ShadowProps](https://styled-system.com/table#shadow)


## License

MIT © [urbit](https://github.com/urbit)
