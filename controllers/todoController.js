const Todo = require("../models/todo");

// create a todoController object to wrap all the todo-related functions
const todoController = {
    getAllTodos: async (req, res) => {
        // get all the todos from the database
        const todos = await Todo.find();

        // send the todos as a response
        res
            .status(200)
            .send({
                todos: todos,
            });
    }
}

// export the todoController object
module.exports = todoController;