const express = require('express');
const { register, login, me } = require('../controllers/authController');
const auth = require('../middlewares/auth');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/me', auth.isAuthenticated, me);

module.exports = authRouter;