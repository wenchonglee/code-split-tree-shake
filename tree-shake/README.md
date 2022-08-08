## Tree Shaking

## Note

The `consumer` project requires the `rollup` project to have built itself, because `consumer` imports `rollup`.  
Therefore, when you run `yarn build` or `yarn dev` for the first time, it will have thrown an error because `consumer` hasn't been built yet.  
If you still encounter an error stating that `local-dep` cannot be found, then run `yarn upgrade local-dep` to make sure the dependency is installed correctly

### TODO

### Setup

```bash
# in the rollup directory
yarn build

# in the consumer directory
yarn
yarn build
```

You can then rebuild the consumer by adding/removing `SUPER_LONG_STRING` and seeing the effects of the produced bundle.  
To visualize this effect, you can also use:  
`npx source-map-explorer dist/assets/<index.filename>.js --no-border-checks`
