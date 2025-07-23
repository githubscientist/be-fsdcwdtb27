// import the file system module
const fs = require('fs');

const logger = (req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    console.log(`----------------`);

    // Call the next middleware in the stack
    next();
}

module.exports = logger;