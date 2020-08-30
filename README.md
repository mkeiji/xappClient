# The App Client

_TODO: Description goes here._

## Requirements

1. [nodeJs](https://nodejs.org/en/) (at least v12.18.2)
2. [npm](https://www.npmjs.com/) (at least v6.14.5 - usually comes with nodejs)
3. [angular-cli](https://cli.angular.io/)

## Development

### Important Documentation

1. [Angular material](https://material.angular.io/components/categories) for the components and
2. [Bootstrap4](https://getbootstrap.com/docs/4.5/getting-started/introduction/) for styling.
   Please follow the official documentation.

### To run the app

```bash
npm run start
```

Navigate to [http://localhost:4000/](http://localhost:4000)

> The app will automatically reload if you change any of the source files.
> NOTE: you might need to install 'nx' with `npm install -g nx`

### To run unit tests

```bash
nx test xapp
```

To execute the unit tests via [Jest](https://jestjs.io).

```bash
nx affected:test
```

to execute the unit tests affected by a change.

### CLI

#### Build

```bash
nx build xapp
```

to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Generate a library

```bash
nx g @nrwl/angular:lib my-lib
```

to generate a library.

> Libraries are sharable across libraries and applications. They can be imported from `@client/mylib`.

#### Add Component

```bash
nx g component my-component --project=my-lib-or-project --export
```

to generate a new component.

#### Format Code before Push

```bash
npm run format
```
to format untracked/uncommitted files

```bash
npm run formatlast
```
to format last commit

```bash
npm run formatall
```
to format all code base
