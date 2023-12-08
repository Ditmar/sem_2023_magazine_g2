# Quick Setup Guide
This document outlines the steps for setting up and running the database and server for the REST API.
## Setting Up the Database
### Start MongoDB
Navigate to the `database` directory and execute:
```
docker-compose up -d

```
This will start MongoDB in a Docker container.
## Project Setup
### Install dependencies:
In the project's root directory, run:
```
npm install
```
### Install Nodemon and Typescript (globally)
if not already installed globally, run
```
npm install -g nodemon typescript
```
## Running the Server
Build a server then , execute commands to build and serve the application.
```
npm run dev:build
npm run dev:serve
```
Notes:

Ensure Docker and Node.js are installed on your system.
The MongoDB database runs in a Docker container, based on the configuration specified in database/docker-compose.yml.
The commands dev:build and dev:serve should be defined in your package.json.
don't forgot setup the .envs files with the correct variables
