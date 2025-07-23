// import express module
const express = require('express');
const { getAllTodos } = require('../controllers/todoController');

// create a router object for managing todo routes
const todoRouter = express.Router();

// manage the routes for todos
todoRouter.get('/', getAllTodos);

// export the todoRouter instance
module.exports = todoRouter;