## Backend Application

### What is NodeJS?

- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- It allows developers to execute JavaScript code server-side.

### js, mjs and cjs

- **.js**: Standard JavaScript file, can be used for both client-side and server-side code.
- **.mjs**: Indicates a module file in Node.js, used for ES6 modules that use `import` and `export` syntax.
- **.cjs**: Indicates a CommonJS module, used for Node.js modules that use `require` and `module.exports`.

### Built In , third party & custom packages

- **Built-in packages**:

  - These are packages that come with Node.js
  - such as
    - http: A core module for creating HTTP servers and clients.
    - fs: A core module for file system operations.
    - path: A core module for handling file and directory paths.

- **Third-party packages**:

  - These are packages that are not included with Node.js by default.
  - They can be installed via npm (Node Package Manager).
  - Examples include:
    - express: A web framework for Node.js.
    - mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
    - cors: A middleware for enabling Cross-Origin Resource Sharing.
    - dotenv: A module for loading environment variables from a `.env` file.
    - bcrypt: A library for hashing passwords.
    - jsonwebtoken: A library for creating and verifying JSON Web Tokens (JWT).
    - nodemailer: A module for sending emails.
    - multer: A middleware for handling multipart/form-data, used for file uploads.
    - body-parser: A middleware for parsing incoming request bodies in a middleware before your handlers, available under the `req.body` property.
    - cookie-parser: A middleware for parsing cookies attached to the client request object.
    - morgan: A middleware for logging HTTP requests.
    - nodemon: A utility that monitors for changes in your source code and automatically restarts your server.

- **Custom packages**:
  - These are packages that you create for your own application.
  - For example:
    - logger: A custom logging utility that formats and outputs logs in a specific way.
    - auth: A custom authentication module that handles user login and registration.
    - errorHandler: A custom error handling middleware that formats errors and sends appropriate responses to the client.

### Express JS

- Node.js will become cumbursome as our application grows.
- This will make it difficult to manage routes, middleware, and other functionalities. Also, it is not easily maintainable and scalable.
- Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
- It simplifies the process of building web applications by providing a set of tools and utilities that make it easier to handle routing, middleware, and other common tasks.

### Version Number

- The version number of a package is specified in the `package.json` file.
- First part: Major version - Indicates a significant change that may break backward compatibility.
- Second part: Minor version - Indicates the addition of new features that are backward compatible.
- Third part: Patch version - Indicates bug fixes that are backward compatible.

### To Setup Backend Application:

1. Create an empty directory for your project.
2. Open the directory in vs code.
3. create a file named `server.js`, the entry point of your application.
4. the server.js file should have the following code:
5. run `npm init` to create a `package.json` file from the terminal.
6. Run the application using `npm run start` command.

### nodemon

- Nodemon is a utility that monitors for changes in your source code and automatically restarts your server.
- It is useful during development as it saves you from manually restarting the server every time you make changes to your code.
- To use nodemon, you can install it as a dev dependency in your project using `npm install --save-dev nodemon`.
- You can then run your application using `nodemon server.js` instead of `node server.js`.

### Dependencies and Dev Dependencies

- **Dependencies**: These are packages that your application needs to run in production. They are listed under the "dependencies" section in the `package.json` file.
- **Dev Dependencies**: These are packages that are only needed during development, such as testing frameworks, build tools, and development utilities. They are listed under the "devDependencies" section in

### Middleware

- Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

### Status Codes

- 1xx: Informational responses
- 2xx: Success
- 3xx: Redirection
- 4xx: Client errors
- 5xx: Server errors
- Common status codes include:
  - 200: OK
  - 201: Created
  - 204: No Content
  - 400: Bad Request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not Found
  - 500: Internal Server Error
  - 503: Service Unavailable
  - 502: Bad Gateway
