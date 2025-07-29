const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const User = require('../models/user');

const auth = {
    isAuthenticated: async (req, res, next) => {
        try {
            // get the token from the request headers
            // let token = req.headers['authorization'];
            const token = req.cookies.token; // assuming the token is stored in a cookie

            // if no token is provided, send an error response
            if (!token) {
                return res.status(200).json({ message: 'No token provided' });
            }

            // token = token.split(' ')[1]; // remove 'Bearer ' prefix

            // verify the token
            const decoded = jwt.verify(token, JWT_SECRET);

            if (!decoded) {
                return res.status(401).json({ message: 'Unauthorized access' });
            }

            // set the userId in the request object
            req.userId = decoded.id;

            // proceed to the next middleware
            next();
        } catch (error) {
            return res.status(500).json({ message: 'Authentication failed', error: error.message });
        }
    },
    allowRoles: (roles) => {
        return async (req, res, next) => {
            try {
                // get the user id from the request object
                const userId = req.userId;

                // get the user from the database
                const user = await User.findById(userId);

                if (!roles.includes(user.role)) {
                    return res.status(403).json({ message: 'Access denied' });
                }

                // if the user has the required role, proceed to the next middleware
                next();
            } catch (error) {
                return res.status(500).json({ message: 'Access Forbidden', error: error.message });
            }
        }
    }
}

module.exports = auth;