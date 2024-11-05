const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Signup function
const signup = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user object
    user = new User({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create JWT token payload
    const payload = {
      userId: user._id,
      email: user.email,
    };

    // Sign the token with an expiration of 1 hour
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return the token in the response
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
// Logout function
const logout = async (req, res) => {
  try {
    // If you're using cookies to store the token, clear the cookie
    // res.clearCookie('token');

    // Since you're using token-based auth stored on the client-side (e.g., localStorage),
    // you might not need to do anything server-side. However, if you implement token blacklisting,
    // you can add the token to a blacklist here.

    res.status(200).json({
      message: 'Logged out successfully',
      error: false,
      success: true,
      data: [],
    });
  } catch (err) {
    console.error('Logout error:', err);
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = { signup, login, logout }
