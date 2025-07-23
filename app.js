// import the express module
const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
const todoRouter = require('./routes/todoRouter');

// create an instance or application of express
const app = express();

// middleware to parse JSON bodies
app.use(express.json());

// import the logger middleware
app.use(logger);

// configure the routes for the application
app.use('/todos', todoRouter);

// import the error handling middleware
app.use(errorRoute);

// export the app instance
module.exports = app;