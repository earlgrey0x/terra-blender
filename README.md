# Terra Blendr

This project provides the primitives for privacy solution in blockchain wallet funding.

## Regarding the Terra integration

The project uses the `terra-money/terra.js` and the `terra-money/wallet-provider` to help with the connectivity to the wallet.

The documentation can be found in `https://github.com/terra-money/terra.js/wiki` but also in the base of the repository `https://github.com/terra-money/terra.js`.

Keep in mind that the wallet-provider has a different repository (https://github.com/terra-money/wallet-provider) and most of the documentation can actually be found in action looking to the code of [Anchor](https://github.com/Anchor-Protocol/anchor-web-app) and [Mirror](https://github.com/Mirror-Protocol/terra-web-app) WebApp projects.

## How to get start

The project is a common client-side React application using the version 17. Therefore is essential to setup the common Node/NPM development environment.

After that, proceed with the regular `npm install` or `yarn` to download the dependencies.

The following scripts are pre-build to allow the local development.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
