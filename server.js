// import the express module
const express = require('express');
const logger = require('./utils/logger');

// create an instance or application of express
const app = express();

// middleware to parse JSON bodies
app.use(express.json());

// import the logger middleware
app.use(logger);

// configure the routes for the application
app.get('/', (request, response) => {
    response.json({ message: 'Hello, Root!' });
});

// run the application
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});