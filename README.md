# indigo-react

[![NPM](https://img.shields.io/npm/v/indigo-react.svg)](https://www.npmjs.com/package/indigo-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Related
[Indigo Tokens](https://www.github.com/urbit/indigo-tokens)

[Indigo React (this library)](https://www.github.com/urbit/indigo-react)

## Quick Start

```
npm install --save indigo-react
```

Install peer dependencies

```
npm install --save indigo-tokens styled-components @reach/menu-button prop-types styled-components styled-system react react-dom
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
The main directories are `src` and `demo`
`src` is where the ```indigo-react``` styles live(primitives & components).
`demo` is the site you want to build using `indigo-react`.
````

#build and watch your src directory
/indigo-react
$ npm run start

#build and watch your demo directory
/indigo-react/demo
$ npm run start
````

[Indigo Tokens](https://github.com/urbit/indigo-tokens)

### Styled Components and Styled System
They sound similar and thats annoying, but they are separate yet related libraries. Here is what each does.

Styled Components
- Allows writing 'CSS' in JS with template string via `styled.div` etc.
- Transforms these strings into classNames.

Styled System
- Provides notion of a 'Theme' in the form of theme.js or indig-tokens.
- Knows how to take a prop named `p` or `padding` and look for a relevant value in the `theme`. Knows how to differentiate a value like `p='4'` (targets theme) vs `p='4px'` (uses 4px).

### Styled System Reference
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
