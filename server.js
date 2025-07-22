// import the express module
const express = require('express');

// create an instance or application of express
const app = express();

app.use(express.json()); // middleware to parse JSON bodies

// configure the routes for the application
app.get('/', (request, response) => {
    console.log(request.body);
    response.json({ message: 'Hello, Root!' });
});

// run the application
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});