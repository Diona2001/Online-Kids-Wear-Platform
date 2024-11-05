import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import loginImage from '../assets/kids.png'; // Ensure the path to the image is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate();

  // Validation function to check form inputs
  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const url = isAdminLogin ? 'http://localhost:3000/api/admin/login' : 'http://localhost:3000/api/users/login'; // Toggle between admin and user URL

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        console.log("login details",email,password,isAdminLogin ? 'Admin' : 'User');
      

        if (!response.ok) {
          // Handle non-2xx HTTP responses
          const errorData = await response.json();
          throw new Error(errorData.message || 'Login failed');
        }

        const data = await response.json();

        // Store the token in localStorage
        localStorage.setItem('token', data.token);
        
        if (isAdminLogin) {
          navigate('/admin-dashboard');
        } else {
          navigate('/landingpage');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert(error.message || 'An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={loginImage} alt="Login Background" className="login-image" />
      </div>
      <div className="form-container">
      <h2>{isAdminLogin ? 'ADMIN LOGIN' : 'USER LOGIN'}</h2>
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

           {/* Toggle Button for User/Admin Login */}
          <div className="toggle-container">
            <label>
              <input
                type="checkbox"
                checked={isAdminLogin}
                onChange={() => setIsAdminLogin(!isAdminLogin)}
              />
              Switch to {isAdminLogin ? 'User' : 'Admin'} Login
            </label>
          </div>

          <button type="submit" className="continue-button">
            {isAdminLogin ? 'Login as Admin' : 'Login as User'}
          </button>

          {!isAdminLogin && <Link to="/forgotPassword">Forgot Password?</Link>}

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
};

export default Login;
