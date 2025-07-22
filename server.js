// import the express module
const express = require('express');

// create an instance or application of express
const app = express();

// configure the routes for the application
app.get('/', (request, response) => {
    response.json({ message: 'Hello, ExpressJS!' });
});

// run the application
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});