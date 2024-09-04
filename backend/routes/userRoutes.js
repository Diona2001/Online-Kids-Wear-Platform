const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { signupValidation, loginValidation, validate } = require('../middleware/validateUser');

const router = express.Router();

// User Registration
router.post('/signup', signupValidation, validate, async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  try {
    const user = new User({ firstName, lastName, email, password, phoneNumber });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering user', errors: err.errors });
  }
});

// User Login
router.post('/login', loginValidation, validate, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


