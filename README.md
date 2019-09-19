# indigo-react

> Tlon&#x27;s design language

[![NPM](https://img.shields.io/npm/v/indigo-react.svg)](https://www.npmjs.com/package/indigo-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## Install
```
npm install --save indigo-react
```

**React**

```jsx
import React, { Component } from "react";

import { StyledH1 } from "indigo-react";

class Example extends Component {
  render() {
    return <StyledH1>Urbit</StyledH1>;
  }
}
```

## Setup
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

## License

MIT © [urbit](https://github.com/urbit)
