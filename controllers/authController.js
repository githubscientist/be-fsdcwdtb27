const User = require('../models/user');
const bcrypt = require('bcrypt');

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
    }
}

module.exports = authController;