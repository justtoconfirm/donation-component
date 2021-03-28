# Donation Component

A reusable Donation Component built in React and using the Gatsby framework.

## Install

Begin by cloning the repository from GitHub. Git is required to be installed.

```
$ git clone https://github.com/justtoconfirm/donation-component.git
```

Change directory into the `donation-component` directory and run the `install` command. This will install the NPM (Node Package Manager) packages needed for the application to run. 

Node is required to use NPM (Node Package Manager). It is recommended to install Node using NVM (Node Version Manager).

```
$ cd donation-component
$ npm install
```

Recommend to install `gatsby-cli` globally to allow gatsby commands to be executed.

```
$ npm install gatsby-cli -g
```

## Run Local Server

Gatsby provides a local server to run the application during development. A script has been added the `package.json` file to build the application during development and run the application on localhost.

This will run the `gatsby develop` command.

```
$ npm run start
```

The application will run on port 8000: http://localhost:8000/

## Production Deployment

The build will be triggered each time a commit is made to the main branch in GitHub. This will run the build command to generate the production code and deploy to Netlify to host.

https://youthful-babbage-4e3ae7.netlify.app