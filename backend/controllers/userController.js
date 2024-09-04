// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errors: { email: 'Email already in use' } });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ errors: { general: 'Server error' } });
  }
};
