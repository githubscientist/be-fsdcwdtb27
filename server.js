// import the express module
const express = require('express');

// create an instance or application of express
const app = express();

// configure the routes for the application
app.get('/', (request, response) => {
    response.json({ message: 'Hello, Root!' });
});

app.get('/test', (request, response) => {
    response.json({ message: 'GET, Test!' });
});

app.post('/test', (request, response) => {
    response.json({ message: 'POST, Test!' });
});

app.put('/test', (request, response) => {
    response.json({ message: 'PUT, Test!' });
});

app.patch('/test', (request, response) => {
    response.json({ message: 'PATCH, Test!' });
});

app.delete('/test', (request, response) => {
    response.json({ message: 'DELETE, Test!' });
});

// run the application
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});