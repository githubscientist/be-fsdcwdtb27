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
    },
    createTodo: async (req, res) => {
        const { content } = req.body;

        // create a new todo object or instance
        const newTodo = new Todo({
            content,
            isCompleted: false,
        });

        await newTodo.save();

        // send the newly created todo as a response
        res.status(201).json(newTodo);
    },
    updateTodo: async (req, res) => {
        // get the id from the request parameters
        const { id } = req.params;

        // get the updated content from the request body
        const { content } = req.body;

        // find the todo by id and update it
        await Todo.findByIdAndUpdate(id, { content });

        // send a success response
        res.status(200).json({ message: "Todo updated successfully" });
    },
    deleteTodo: async (req, res) => {
        // get the id from the request parameters
        const { id } = req.params;

        // find the todo by id and delete it
        await Todo.findByIdAndDelete(id);

        // send a success response
        res.status(200).json({ message: "Todo deleted successfully" });
    }
}

// export the todoController object
module.exports = todoController;