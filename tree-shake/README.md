## Tree Shaking

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
