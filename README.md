# [ARCHIVED] indigo-react

[![npm (scoped)](https://img.shields.io/npm/v/@tlon/indigo-react?style=flat)](https://www.npmjs.com/package/@tlon/indigo-react)

Indigo React is a component library for implementing the [Indigo Design System](<https://www.figma.com/community/file/822953707012850361/Indigo-(alpha)>). It's built with React, [styled-components](https://styled-components.com) and [styled-system](https://styled-system.com). It also uses [Formik](https://formik.org/) and [Reach-UI](https://reach.tech/).

## Quick Start

1. Install the library

```bash
npm install --save @tlon/indigo-react
```

2. Install peer dependencies

```bash
npm install --save @tlon/indigo-light styled-components styled-system react react-dom @reach/disclosure @reach/menu-button @reach/tabs markdown-to-jsx formik
```

If you are using Typescript, install the type definitions for several of these libraries.

```bash
npm install --save @types/styled-components @types/styled-system @types/styled-system__css
```

3. Install a theme

```bash
npm install --save @tlon/indigo-light @tlon/indigo-dark
```

## Basic Usage

```js
import * as React from "react";
import { ThemeProvider } from "styled-system";
import { Text, Reset } from "@tlon/indigo-react";
import light from "@tlon/indigo-light";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={light}>
        <Reset />
        <Text fontSize="2">Indigo!</Text>
      </ThemeProvider>
    );
  }
}
```

In the above, we are wrapping our application in styled-component's `ThemeProvider` and passing in our `theme` from `@tlon/indigo-light`. In practice, you should rarely need to import the theme.

The `<Text />` component accepts a fontSize prop, which is one of many style props provided by `styled-system`. Using VSCode is the best way to see the list of props each component can accept.

You can also check out the [styled-system docs](https://styled-system.com/api) for a breakdown of props.

Many of these props have corrosponding styling shortcuts, drawn from the provided theme, like `@tlon/indigo-light`. These shortcuts are also provided by `styled-system`. To see how props map to values in our theme, check out [styled-system's mapping](https://styled-system.com/table).

Take a look at the [theme](https://www.github.com/urbit/indigo-light) to get a sense for which style values can be accessed from styled props.

## Development

See [DEVELOPMENT.md](https://github.com/urbit/indigo-react/blob/master/DEVELOPMENT.md) for example cases of component patterns used to create Indigo.

### Related

| Library      | Github                                    | NPM                                              |
| ------------ | ----------------------------------------- | ------------------------------------------------ |
| indigo-light | https://www.github.com/urbit/indigo-light | https://www.npmjs.com/package/@tlon/indigo-light |
| indigo-dark  | https://www.github.com/urbit/indigo-dark  | https://www.npmjs.com/package/@tlon/indigo-dark  |
| indigo-react | https://www.github.com/urbit/indigo-react | https://www.npmjs.com/package/@tlon/indigo-react |

### License

MIT License © [Tlon](https://tlon.io)
