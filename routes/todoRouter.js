// import express module
const express = require('express');

// create a router object for managing todo routes
const todoRouter = express.Router();

// manage the routes for todos
todoRouter.get('/', (request, response) => {
    response.json({ message: 'Hello, Todo!' });
});

// export the todoRouter instance
module.exports = todoRouter;