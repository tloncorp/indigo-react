# indigo-react

[![npm (scoped)](https://img.shields.io/npm/v/@tlon/indigo-react?style=flat)](https://www.npmjs.com/package/@tlon/indigo-react)

Indigo React is a component library for implementing the [Indigo Design System](https://www.figma.com/community/file/822953707012850361/Indigo-(alpha)).

## Quick Start
1. Install the library
```bash
$ npm install --save @tlon/indigo-react
```

2. Install peer dependencies
```bash
$ npm install --save @tlon/indigo-light styled-components styled-system react react-dom @reach/disclosure @reach/menu-button @reach/tabs markdown-to-jsx
```

3. Install a theme
```bash
$ npm install --save @tlon/indigo-light @tlon/indigo-dark
```


## Basic Usage

```js
import * as React from "react";
import { Text } from '@tlon/indigo-react';
import light from '@tlon/indigo-light';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={light}>
        <Text fontSize='2'>Urbit</Text>
      </ThemeProvider>
    );
  }
}
```

In the above, we are wrapping our application in styled-component's `ThemeProvider` and passing in our `theme` from `@tlon/indigo-light`.

The `<Text />` component accepts a fontSize prop, which is one of many style props provided by `styled-system`. Using VSCode is the best way to see the list of props each component can accept.

You can also check out the [styled-system docs](https://styled-system.com/api) for a breakdown of props.

Many of these props have corrosponding styling shortcuts, drawn from the provided theme, like `@tlon/indigo-light`. These shortcuts are also provided by `styled-system`. To see how props map to values in our theme, check out [styled-system's mapping](https://styled-system.com/table).

### Related

| Library      | Github                                    | NPM                                              |
| ------------ | ----------------------------------------- | ------------------------------------------------ |
| indigo-light | https://www.github.com/urbit/indigo-light | https://www.npmjs.com/package/@tlon/indigo-light |
| indigo-dark  | https://www.github.com/urbit/indigo-dark  | https://www.npmjs.com/package/@tlon/indigo-dark  |
| indigo-react | https://www.github.com/urbit/indigo-react | https://www.npmjs.com/package/@tlon/indigo-react |