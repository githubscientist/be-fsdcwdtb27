// import the file system module
const fs = require('fs');

const logger = (req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    console.log(`----------------`);

    const timestamp = new Date().toISOString();

    fs.writeFile('./logs/logs.txt', `${timestamp}\nRequest Method: ${req.method}\nRequest URL: ${req.url}\nRequest Body: ${JSON.stringify(req.body)}\n----------------\n`, { flag: 'a' }, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
        console.log('Log file written successfully');
    });

    // Call the next middleware in the stack
    next();
}

module.exports = logger;