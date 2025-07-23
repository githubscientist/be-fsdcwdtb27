// create a todoController object to wrap all the todo-related functions
const todoController = {
    getAllTodos: (req, res) => {
        res.json({ message: 'Hello, Todo!' });
    }
}

// export the todoController object
module.exports = todoController;