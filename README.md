# indigo-react

[![npm (scoped)](https://img.shields.io/npm/v/@tlon/indigo-react?style=flat)](https://www.npmjs.com/package/@tlon/indigo-react)

Indigo React is a component library for implementing the [Indigo Design System](<https://www.figma.com/community/file/822953707012850361/Indigo-(alpha)>). It's built with React and [Tailwind CSS](https://tailwindcss.com/). It also uses [Formik](https://formik.org/) and [Reach-UI](https://reach.tech/).

## Quick Start

1. Install the library

```bash
npm install --save @tlon/indigo-react
```

2. Install peer dependencies

```bash
$ npm install --save formik
```

3. Install and Setup Tailwind

Tailwind has [significant documentation](https://tailwindcss.com/docs/installation) on how to get it setup in your particular environment.

Once you have Tailwind setup, you can simply import Indigo's `tailwind.config.js` and merge it with your config.

**tailwind.config.js**

```js
import resolveConfig from "tailwindcss/resolveConfig";
import indigo from "@tlon/indigo-react/tailwind.config";

module.exports = resolveConfig(
  {
    purge: [],
    theme: {
      extend: {},
    },
    //... rest of your config
  },
  indigo
);
```

## Basic Usage

In your main CSS file, you'll need to import both Tailwind and Indigo files:

```css
@import "tailwindcss/base";
@import "@tlon/indigo-react/base";

@import "tailwindcss/components";
@import "@tlon/indigo-react/components";

@import "tailwindcss/utilities";
@import "@tlon/indigo-react/utilities";
```

**Example Component**

```js
import React from "react";
import { Button } from "@tlon/indigo-react";

export const ExampleComponent = () => (
  <div className="space-y-2">
    <h2 className="h1">Important Information</h2>
    <p className="text-gray-500">
      Here's a block of text explaining something about why you need to save
    </p>
    <Button variant="primary">Save</Button>
  </div>
);
```

Indigo provides it's own components in addition to the utilities that Tailwind normally provides. A variety of classes have also been added for components that would only have styling applied and no other functionality.

Above you can see a `<Button>` component used from Indigo, as well as a custom class for making the **Heading 1** style as `h1`. In addition to that we're using standard utilities from Tailwind like `space-y-2` and `text-gray-500`.

Full documentation of the new Tailwind version of Indigo is currently under development.

## Development

See [DEVELOPMENT.md](https://github.com/urbit/indigo-react/blob/master/DEVELOPMENT.md) for example cases of component patterns used to create Indigo.

### License

MIT License © [Tlon](https://tlon.io)
