const { default: mongoose } = require("mongoose");
const app = require("./app");
const { MONGODB_URI, PORT } = require("./utils/config");

console.log('Connecting to the database...');
// connect to the database
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to the database!');

        console.log('Starting the server...');
        // run the application
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err.message);
    })