# Bridge Hand

## Launch App

### With Docker
```
yarn deploy
```

App will be available at http://localhost:9999 by default. Port can be changed in `package.json`.


### With hot-reloads for development/testing
Install [node](https://nodejs.org) and [yarn](https://yarnpkg.com)

Install dependencies with
```
yarn install
```

Launch app with
```
yarn serve
```

## Other commands

### Build distributable app files
```
yarn build
```

Files will be available in the `/dist` directory

### Run unit tests
```
yarn test:unit
```