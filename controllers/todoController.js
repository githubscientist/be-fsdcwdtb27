const Todo = require("../models/todo");

// create a todoController object to wrap all the todo-related functions
const todoController = {
    getAllTodos: async (req, res) => {
        // get all the todos from the database
        const todos = await Todo.find();

        // send the todos as a response
        res.status(200).json(todos);
    },
    getTodoById: async (req, res) => {
        // Get the ID from the request parameters
        const { id } = req.params;

        // find the todo by ID in the database
        const todo = await Todo.findById(id);

        // send the todo as a response
        res.status(200).json(todo);
    }
}

// export the todoController object
module.exports = todoController;