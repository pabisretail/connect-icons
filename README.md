# connect-icons
UI Icon Library for ConnectV2

## Getting started

Clone Repository `git@github.com:alexx986/connect-icons.git`

This repo use `node >= 18.0.0` and npm `>=8.0.0`

Install the dependencies `npm install`

## Develop
We use Storybook for developing the components. 
Run `npm run storybook` to launch the local webserver.

## Build
The project is using [rollup](https://rollupjs.org/introduction/) for build process

Execute `npm run build` to run build process and create dist directory in the root of the project 

## Configuration
We use this url `https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe#building-your-library` for configure the project

## Release

1. Update version in `package.json`
2. Execute `npm run build`
3. Push file to main branch
4. Run `npm publish`

## Install

Execute `yarn add @pabisretail/connect-icons` to install the library on the project