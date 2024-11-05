import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          error = 'First Name is required';
        }
        break;
      case 'lastName':
        if (!value.trim()) {
          error = 'Last Name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email address is invalid';
        }
        break;
      case 'password':
        if (!value.trim()) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters long';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      case 'phoneNumber':
        if (!value.trim()) {
          error = 'Phone Number is required';
        } else if (!/^[56789]\d{9}$/.test(value)) {
          error = 'Phone Number must start with 5, 6, 7, 8, or 9 and be 10 digits long';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform live validation
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateAllFields = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateAllFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('http://localhost:3000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          console.log('Form data submitted successfully:', result);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
          });
          setErrors({});
          navigate('/login'); // Redirect to the login page on successful sign-up
        } else {
          console.error('Error:', result);
          setErrors(result.errors || {});
          alert(result.message || 'Sign up failed. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };
  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className="input-container">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="input-container">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
          <div className="input-container">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          <button type="button" className="signup-google">
            <img 
              src="https://developers.google.com/identity/images/g-logo.png" 
              alt="Google logo"
              className="google-logo"
            /> 
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
