import React, { useState } from 'react';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form logic
      console.log('Password reset link sent to:', formData.email);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="form-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="reset-button">Send Reset Link</button>
        </form>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .forgot-password-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f0f4f8;
        }

        .form-container {
          background-color: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
        }

        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .input-container {
          margin-bottom: 1rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #555;
        }

        input[type="email"] {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          color: #333;
        }

        input[type="email"]:focus {
          border-color: #6c63ff;
          outline: none;
        }

        .error {
          display: block;
          margin-top: 0.5rem;
          color: #e74c3c;
          font-size: 0.85rem;
        }

        .reset-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #6c63ff;
          color: white;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .reset-button:hover {
          background-color: #5849c8;
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
