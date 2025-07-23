const { default: mongoose } = require("mongoose");
const app = require("./app");
require('dotenv').config();

console.log('Connecting to the database...');
// connect to the database
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to the database!');

        console.log('Starting the server...');
        // run the application
        app.listen(3001, () => {
            console.log(`Server is running on http://localhost:3001`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err.message);
    })