This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Prerequisites

- Node.js 7.10.0
- [Yarn](https://yarnpkg.com/en/)
- Google Chrome

### How to install

- Just run `yarn` to install all dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

# Enviroment Variables

`REACT_APP_API_ROOT_URL` refers to the base url the RM service is being hosted on. Defaults to `http://localhost:8084/`

`REACT_APP_COLLECTION_EXERCISE_ID` refers to the unique identifyer RM uses to identify each excercise. This variable has no default and must be provided on app startup.

# Troubleshooting

## Jest crashing

### Problem

Running `yarn test` causes Jest to crash with the following error:

```
(FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
(FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
(FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: Error watching file for changes: EMFILE
    at exports._errnoException (util.js:1036:11)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
```

### Solution

According to [this thread](https://github.com/facebook/jest/issues/1767), install watchman: `brew install watchman`
