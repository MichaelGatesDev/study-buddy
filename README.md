# Study Buddy

## About

Study Buddy is a web application focused on helping university students find a friend to study with. With [helpful study tools](), [real-time chats]() and [more](), Study Buddy is fully-equipped to assist student success.

## Features

TBD

## Developers

* [Michael Gates](https://github.com/MichaelGatesDev/)
* [Jolizbeth Bonilla](https://github.com/jolizbeth)

## Project Structure

This project uses a Typescript Monorepo structure. Each subproject (backend, frontend, etc.) is its own sub-project in the `packages` folder. Some projects have references to eachother.

### Backend

[Express](https://expressjs.com/) server to handle all web requests.

### Common

Common models and utilities for use across the project

### Frontend

Written in [ReactJS](https://reactjs.org/), created using `create-react-app` and ejected.

### Prerequisites

* [NodeJS](https://nodejs.org/) v13.7
* [Yarn](http://yarnpkg.com/) v1.21

## Setting up

Clone the project and `cd` into it

`git clone https://github.com/MichaelGatesDev/study-buddy.git && cd study-buddy`

Install the dependencies and setup lerna

`yarn`

## Running

In order to properly develop the project, you need to run both the backend (responsible for data/services) and the frontend

To run the backend, run this command from the root directory:

`yarn start:backend`

To run the frontend, run this command from the root directory:

`yarn start:frontend`

## Technical Notes / Quirks

* Every time a change is made to the `common` package, it must be transpiled (run `yarn build`). Otherwise, there will be errors saying "module not found" or "unknown reference". You may also need to restart TS within VS Code by running the command (ctrl+shift+p) `Typescript: Restart TS Server`.
