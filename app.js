// import the express module
const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
const todoRouter = require('./routes/todoRouter');
const authRouter = require('./routes/authRouter');
const cookieParser = require('cookie-parser');

// create an instance or application of express
const app = express();

// middleware to parse JSON bodies
app.use(express.json());

// middleware to parse cookies
app.use(cookieParser());

// import the logger middleware
app.use(logger);

// configure the routes for the application
app.use('/api/v1/todos', todoRouter);
app.use('/api/v1/auth', authRouter);

// import the error handling middleware
app.use(errorRoute);

// export the app instance
module.exports = app;