const express = require('express');
const { register, login, me, logout } = require('../controllers/authController');
const auth = require('../middlewares/auth');

const authRouter = express.Router();

// Public Routes
// Anyone can access these routes
authRouter.post('/register', register);
authRouter.post('/login', login);

// Protected Routes
// Only authenticated users can access this route
authRouter.get('/me', auth.isAuthenticated, me);
authRouter.get('/logout', auth.isAuthenticated, logout);

module.exports = authRouter;