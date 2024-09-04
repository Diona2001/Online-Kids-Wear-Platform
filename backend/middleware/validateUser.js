// middleware/validateUser.js
const { check, validationResult } = require('express-validator');

// Validation rules for signup
const signupValidation = [
  check('firstName').notEmpty().withMessage('First Name is required'),
  check('lastName').notEmpty().withMessage('Last Name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  check('phoneNumber').matches(/^[56789]\d{9}$/).withMessage('Phone Number must start with 5, 6, 7, 8, or 9 and be 10 digits long'),
];

// Validation rules for login
const loginValidation = [
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

// Middleware to validate input
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { signupValidation, loginValidation, validate };

