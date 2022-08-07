## Code Splitting

### React

To run dev instances:

```
yarn
yarn dev
```

Given the same piece of React code, all 3 bundlers were able to code split for you

- `create-react-app`
- `esbuild`
- `vite`

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

### Code splitting in plain javascript

Look into the project [`webpack`](/code-split/webpack/), this demonstrates how code splitting works without React.  
To view product of this demo, run `yarn build` specifically in this folder, followed by opening the `dist/index.html` in a browser.

There are 2 js files in `src`:

- `foobar.js` exports a constant string
- `index.js` has a function that imports `foobar.js`
  ```js
  const { default: foobarString } = await import("./foobar");
  ```

Webpack and other modern tools parses `import` statements to enable code splitting.  
`index` is our "entry point", and it contains instructions on where to fetch `foobar` if it is required.

> Note:
>
> - There are ways to statically designate what should be code split
> - There are also ways to prefetch these chunks if you configure it to
>
> These are left out for simplicity
