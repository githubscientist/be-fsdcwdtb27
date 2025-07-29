// import express module
const express = require('express');
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const auth = require('../middlewares/auth');

// create a router object for managing todo routes
const todoRouter = express.Router();

// manage the routes for todos
todoRouter.get('/', auth.isAuthenticated, getAllTodos);
todoRouter.get('/:id', getTodoById);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);

// export the todoRouter instance
module.exports = todoRouter;