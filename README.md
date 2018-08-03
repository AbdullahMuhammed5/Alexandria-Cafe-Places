## Project Overview

This is th 8th and the last project in Udacity Nanodegree and it is built with React.
In this project i will develop a single page application featuring a map of Alexandria cafe places.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). A subset of [instructions](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Usage for users](#usage-for-users)
- [Deployment](#deployment)

## Folder Structure

```
my-app/
  README.md
  package.json
  package-lock.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    LocationsApi.js
    Map.js
    SideMenu.js
    registerServiceWorker.js
    index.css
    index.js
    logo.svg
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

## Usage for users
First, visit the app from this link : 
Open the side menu and search for your cafe name, it will show up in the result. click on it to show some information and if you want more just click on View in google maps. 

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.
