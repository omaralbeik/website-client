# omaralbeik.com Webapp


## Table of Contents

- [**Features**](#features)
- [**Structure**](#structure)
  - [Pages](#pages)
- [**Before Starting**](#before-starting)
- [**Getting Started**](#getting-started)
- [**Make it Yours**](#make-it-yours)
- [**Contributing**](#contributing)
- [**License**](#license)



## Features

- Single page web application using React.
- Progressive web app (PWA).
- Fully Written in ES6.
- Client-side routing using React router.
- State management and local caching using Redux and Local Storage.
- Google Analytics support.
- Light/Dark themes and CSS in JS using [styled-componenets](https://www.styled-components.com/)
- Fully responsive design with the help of Bootstrap.


## Structure

#### [Pages](src/pages)
- Home
- BlogListing
- BlogDetails
- ProjectListing
- About
- Error


#### Dependencies
This project is built using React JS, Redux and other dependencies.

Complete list of 3rd party dependencies can be found in [**package.json**](package.json)


## Before Starting
- Make sure [Django local server](https://github.com/omaralbeik/omaralbeik.com-api) is running before starting the React application.


## Getting Started

#### React Setup
1. This app requires **npm** to build, if **Node** and **npm** are not installed on your device, you should install them first [more info here](https://docs.npmjs.com/getting-started/installing-node)
2. Move to project directory and install required npm packages
``` bash
npm i
```

#### Start React development server
Run React server
```bash
npm run start
```

#### Create a production build
To create a production build, use:
```bash
npm run build
```



## Make it yours!

- Change the language or localize the app by updating [**strings/index.js**](src/strings/index.js).
- Update social links in [**links/social.js**](src/links/social.js).
- Add your email in [**data/constants.js**](src/data/constants.js).
- Add your Google Analytics tracking code in [**public/index.html**](public/index.html).



## Contributing

Your feedback is always appreciated and welcomed. If you find a bug in the source code or a mistake in the documentation, you can help me by submitting an issue [**here**](https://github.com/omaralbeik/omaralbeik.com-client/issues). Even better you can submit a Pull Request with a fix :)



## License

This repo is released under the [MIT License](LICENSE).
