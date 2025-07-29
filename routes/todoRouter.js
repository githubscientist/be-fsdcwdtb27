// import express module
const express = require('express');
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const auth = require('../middlewares/auth');

// create a router object for managing todo routes
const todoRouter = express.Router();

// manage the routes for todos
// Public Routes
todoRouter.get('/', getAllTodos);
todoRouter.get('/:id', getTodoById);

// Authenticated Routes
todoRouter.post('/', auth.isAuthenticated, createTodo);

// Protected Routes: Allowed Roles: Admin
todoRouter.put('/:id', auth.isAuthenticated, auth.allowRoles(['admin']), updateTodo);
todoRouter.delete('/:id', auth.isAuthenticated, auth.allowRoles(['admin']), deleteTodo);

// export the todoRouter instance
module.exports = todoRouter;