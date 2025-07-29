const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const auth = {
    isAuthenticated: (req, res, next) => {
        // get the token from the request headers
        // let token = req.headers['authorization'];
        const token = req.cookies.token; // assuming the token is stored in a cookie

        // if no token is provided, send an error response
        if (!token) {
            return res.status(200).json({ message: 'No token provided' });
        }

        // token = token.split(' ')[1]; // remove 'Bearer ' prefix

        // verify the token
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            // if the token is valid, attach the user id to the request object
            req.userId = decoded.id;
            next();
        })
    }
}

module.exports = auth;