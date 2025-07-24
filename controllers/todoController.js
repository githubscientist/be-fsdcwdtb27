const Todo = require("../models/todo");

// create a todoController object to wrap all the todo-related functions
const todoController = {
    getAllTodos: async (req, res) => {
        try {
            // get all the todos from the database
            const todos = await Todo.find();

            // send the todos as a response
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching todos', error: error.message });
        }
    },
    getTodoById: async (req, res) => {
        try {
            // Get the ID from the request parameters
            const { id } = req.params;

            // find the todo by ID in the database
            const todo = await Todo.findById(id);

            // send the todo as a response
            res.status(200).json(todo);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching todo', error: error.message });
        }
    },
    createTodo: async (req, res) => {
        try {
            const { content } = req.body;

            // create a new todo object or instance
            const newTodo = new Todo({
                content,
                isCompleted: false,
            });

            await newTodo.save();

            // send the newly created todo as a response
            res.status(201).json(newTodo);
        } catch (error) {
            res.status(500).json({ message: 'Error creating todo', error: error.message });
        }
    },
    updateTodo: async (req, res) => {
        try {
            // get the id from the request parameters
            const { id } = req.params;

            // get the updated content from the request body
            const { content } = req.body;

            // find the todo by id and update it
            await Todo.findByIdAndUpdate(id, { content });

            // send a success response
            res.status(200).json({ message: "Todo updated successfully" });
        } catch (error) {
            res.status(500).json({ message: 'Error updating todo', error: error.message });
        }
    },
    deleteTodo: async (req, res) => {
        try {
            // get the id from the request parameters
            const { id } = req.params;

            // find the todo by id and delete it
            await Todo.findByIdAndDelete(id);

            // send a success response
            res.status(200).json({ message: "Todo deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting todo', error: error.message });
        }
    }
}

// export the todoController object
module.exports = todoController;