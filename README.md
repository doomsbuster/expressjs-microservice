# Why expressjs-microservice boilerplate?
Easy to use opinionated ExpressJS based micro-service boilerplate. This boilerplate provides a solid pattern that developers can use to scaffold and start devleop a ExpressJS (NodeJS) based microservice within seconds. The boilerplate demonstrates several key design patterns that include:

- Creating complex routes with route nesting
- Use of most popular tools that are must have for any NodeJS based API project.
- Use of Sinon for stubbing, mocking and spying on unit tests.
- Use of supertest to unit and integration test HTTP endpoints and API endpoints.
- Testing promises with Jasmine, Sinon, Supertest and Chai.
- Separation of concerns through use of service classes for business logic, data access classes for database operations and pure routes for API endpoints.
- Exception handling and exception propagation

## What does it provide
This boilerplate provides pre-configured:

1. ExpressJS REST API template
2. Swagger documentation and Swagger UI
3. Jasmine, Sinon, Chai, Supertest configuration for Unit and integration tests.
4. Pre-configured jasmine spec reporter
5. Jasmine Node Debug for debugging unit tests.
6. Fully configured istanbul test coverage
7. Winston logger for logging to file and console with daily rotating log file module. 

## How to install?
Getting started with this boilerplate is easy. There are two ways to install and use it

### Installing manually
Clone this repo on your workstation

    git clone https://github.com/doomsbuster/expressjs-microservice.git YOUR_PROJ_NAME

### Installing as node module
Boilerplate is also available as module from NPM and Yarn registry.

    npm install expressjs-microservice

## Getting started
Once you have installed the boilerplate, running it is easy:

Run

    npm install

Start the application using

    npm start

Point your browser at `http://localhost:3000`, you should see the swagger documentation for the boilerplate API.

>
> The base API is available at the route `/api` e.g. `http://localhost:3000/api/posts`.
>

#### Running unit tests
You can trigger unit tests that have full coverage using `istanbul` and spec reporting using `jasmine-spec-reporter` using the following command

    npm test

#### Running integration tests
All intgration tests whose names end in `-IT.js` for example `it/posts-IT.js` created under the `expressjs-microservice/it` directory will be executed as a part of the integration test command described below.

The name of the file must match the globbing pattern `**/*-IT.js`.

- `posts-IT.js` - Matched
- `posts-it.js` - Not matched

You can customize this behavior by updating the `spec/support/jasmine-integ.json` file.

Run your integration test using the command:

    npm run integtest

## What does it not provide?
This project does come with test coverage for all files as they are expected to be removed or different for your projects. Samples are for demonstration of the concept and the pattern only.

## Contributing
Fork the repo and submit a pull request.

## License
Mr. Doomsbuster doesn't care about attribution. All source code is license under [Do What The Fuck You Want To (WTFPL)](https://ashishdesai.com/license.txt) public license.