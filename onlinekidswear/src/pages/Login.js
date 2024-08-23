import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import loginImage from '../assets/kids.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Email validation
    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation passes, proceed with form submission (e.g., API call)
      console.log('Form is valid. Submitting...');
    } else {
      console.log('Form has errors.');
    }
  };

  return (
    <div className="login-container">
      {/* Image container */}
      <div className="image-container">
        <img
          src={loginImage}
          alt="Login Background"
          className="login-image"
        />
      </div>
      
      {/* Form container */}
      <div className="form-container">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button type="submit" className="continue-button">Login</button>
          <button type="button" className="signin-google">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="google-logo"
            />
            Sign in with Google
          </button>
          <p className='my-5'>
            Don't have an account? 
            <Link to="/sign-up" className='text-blue-600 hover:text-blue-700 hover:underline'> Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
