// import express module
const express = require('express');
const { getAllTodos, getTodoById } = require('../controllers/todoController');

// create a router object for managing todo routes
const todoRouter = express.Router();

// manage the routes for todos
todoRouter.get('/', getAllTodos);
todoRouter.get('/:id', getTodoById);

// export the todoRouter instance
module.exports = todoRouter;