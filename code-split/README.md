# Code Splitting

Code splitting is the act of splitting your bundle into multiple files.
Code is only fetched on demand (or lazy loaded).

For example, if your app uses complex graph libraries that are 3MB in size, you can choose to lazy load pages that contain these graphs.
Unless your clients visit these pages, they will not fetch the code that uses these libraries.
[More info in MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting)

## React

To do this in React is very straight-forward.
The demo here uses the same code with 3 different toolchains to demonstrate that it is "bundler agnostic".

- [`create-react-app`](/code-split/cra/src/App.tsx)
- [`esbuild`](/code-split/esbuild/src/App.tsx)
- [`vite`](/code-split/vite/src/App.tsx)

You can run these instances to take a look for yourself with:

```bash
yarn
yarn dev-cs
```

### The code itself

All you have to do is follow the instructions found on React's [website](https://reactjs.org/docs/code-splitting.html).  
TL;DR:

- Use `lazy` to import components you want to code split
- Wrap it in `<Suspense>` to show some fallback content while the code is being fetched

```tsx
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

## Code splitting in plain javascript

> Being a React developer, the info above should be all you need to know.  
> This section demonstrates how code splitting works outside the scope of React.

This section can be found in the [`webpack` directory](/code-split/webpack/).

### Running the demo

To view product of this demo, run `yarn build` specifically in this folder, followed by opening the `/code-split/webpack/dist/index.html` in a browser.

### The code

This project has the least amount of code required for this demonstration.

- `package.json` only has the `webpack` dependency as the chosen bundler
- `webpack.config.js` contains the instructions on which file to bundle
- `src`  
  There are 2 js files in `src`:

  - `foobar.js` exports a constant string
  - `index.js` has a function that imports `foobar.js`
    ```js
    const { default: foobarString } = await import("./foobar");
    ```

### How it works

Webpack and other modern tools parses `import` statements to enable code splitting.  
With `index.js` as our "entry point", it contains instructions on where to fetch `foobar.js` if it is required.

> Note:
>
> - There are ways to statically designate what should be code split
> - There are also ways to prefetch these chunks if you configure it to
>
> These are left out for simplicity
