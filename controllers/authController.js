const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const authController = {
    register: async (req, res) => {
        try {
            // Get the user details from the request body
            const { name, email, password } = req.body;

            // check if the user already exists
            const existingUser = await User.find({ email });

            if (existingUser.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user object
            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });

            // save the user to the database
            await newUser.save();

            // send a success response
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'Registration failed', error: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // find the user by email
            const user = await User.find({ email });

            // if the user does not exist, send an error response
            if (user.length === 0) {
                return res.status(400).json({ message: 'User not found' });
            }

            // check if the password matches
            const isPasswordValid = await bcrypt.compare(password, user[0].password);

            // if the password is invalid, send an error message
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Invalid password' });
            }

            // generate a JWT token
            const token = jwt.sign({ id: user[0]._id }, JWT_SECRET, { expiresIn: '1h' });

            // send a success response
            res.status(200).json({ message: 'Login successful', token: token });
        } catch (error) {
            res.status(500).json({ message: 'Login failed', error: error.message });
        }
    },
    me: async (req, res) => {
        try {
            // get the user id from the request object
            const userId = req.userId;

            // find the user by id
            const user = await User.findById(userId);

            // if the user does not exist, send an error response
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // send the user data as a response
            res.status(200).json({ user: { id: user._id, name: user.name, email: user.email } });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user data', error: error.message });
        }
    }
}

module.exports = authController;