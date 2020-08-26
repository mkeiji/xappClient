# The App Client
*TODO: Description goes here.*

## Requirements
1. [nodeJs](https://nodejs.org/en/) (at least v12.18.2)
2. [npm](https://www.npmjs.com/) (at least v6.14.5 - usually comes with nodejs)
3. [angular-cli](https://cli.angular.io/)

## Development
### To run the app
``` bash
nx serve xapp
```
Or
``` bash
npm run nx -- serve xapp
```
Or
``` bash
ng serve xapp
```
Navigate to [http://localhost:4000/](http://localhost:4000)
> The app will automatically reload if you change any of the source files.
> NOTE: you might need to install 'nx' with `npm install -g nx`

### To run unit tests
``` bash
ng test xapp
```
To execute the unit tests via [Jest](https://jestjs.io).

``` bash
nx affected:test
```
to execute the unit tests affected by a change.

### CLI
#### Add Component
``` bash
ng g component my-component --project=xapp
```
to generate a new component.

#### Build
``` bash
ng build xapp
```
to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Generate a library
``` bash
ng g @nrwl/angular:lib my-lib
```
to generate a library.
> Libraries are sharable across libraries and applications. They can be imported from `@client/mylib`.
