import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import profileImg from '../assets/profile.png'; // Ensure the path is correct
import logoImg from '../assets/logo.svg'; // Ensure the path is correct
import { IoSearch } from "react-icons/io5";
const Header = () => {
  const [showProfileBox, setShowProfileBox] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by checking the token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Set the user as logged in if a token exists
    }
  }, []); // Run only on initial render

  const handleMouseEnter = () => {
    setShowProfileBox(true);
  };

  const handleMouseLeave = () => {
    setShowProfileBox(false);
  };

  const handleLogout = async () => {
    try {
      // Clear the token from localStorage
      localStorage.removeItem('token');
      setIsLoggedIn(false); // Update state to show login button

      // Send a request to the logout endpoint (if needed)
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <header className='h-16 shadow-lg bg-blue-600 fixed top-0 left-0 w-full z-50'>
      <div className='h-full container mx-auto flex items-center px-6 justify-between'>
        
        {/* Left side: Logo and Site Name */}
        <div className='flex items-center gap-4'>
          <Link to={"/"}>
            <img 
              src={logoImg} 
              className='w-12 h-12' 
              alt="Site Logo" 
            />
          </Link>
          <Link to={"/"}>
            <span className='text-white text-2xl font-bold'>KiddoChic</span>
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <IoSearch />
          </div>
        </div>

        {/* Right side: Cart, Profile, and Login/Logout */}
        <div className='flex items-center gap-5'>
          <div 
            className='relative flex items-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={profileImg} 
              className='w-10 h-10 rounded-full border-2 border-white' 
              alt="User" 
            />

            {showProfileBox && (
              <div className="profile-box">
  
                <Link to="/profile" className='text-blue-600 hover:underline'>View Profile</Link>
                {/* Show Logout button if logged in */}
                {isLoggedIn && (
                  <button 
                    onClick={handleLogout} 
                    className="text-red-500 hover:underline mt-2"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>

          <Link to="/cart" className='text-2xl relative text-white'>
            <FaShoppingCart />
            <div className='text-white w-5 h-5 rounded-full p-1 flex items-center justify-center bg-red-500 absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </Link>

          {/* Show Login or Logout button based on login state */}
          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="px-4 py-2 rounded-lg text-white bg-black hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Logout
            </button>
          ) : (
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-lg text-white bg-black hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
