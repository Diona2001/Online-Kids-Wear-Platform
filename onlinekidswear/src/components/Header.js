import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import profileImg from '../assets/profile.png'; // Ensure the path is correct
import logoImg from '../assets/logo.svg'; // Ensure the path is correct


const Header = () => {
  const [showProfileBox, setShowProfileBox] = useState(false);

  const handleMouseEnter = () => {
    setShowProfileBox(true);
  };

  const handleMouseLeave = () => {
    setShowProfileBox(false);
  };

  return (
    <header className='h-20 shadow-lg bg-blue-600 fixed top-0 left-0 w-full z-50'>
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

        {/* Center: Navigation Links */}
        <nav className='flex items-center gap-6'>
          <Link to="/" className='text-white text-lg hover:text-gray-300 transition duration-200'>
            Home
          </Link>
          <Link to="/products" className='text-white text-lg hover:text-gray-300 transition duration-200'>
            Products
          </Link>
          <Link to="/brands" className='text-white text-lg hover:text-gray-300 transition duration-200'>
            Our Brands
          </Link>
          <Link to="/category" className='text-white text-lg hover:text-gray-300 transition duration-200'>
            Category
          </Link>
          <Link to="/about" className='text-white text-lg hover:text-gray-300 transition duration-200'>
            About Us
          </Link>
          <Link to="/contact" className='text-white text-lg hover:text-gray-300 transition duration-200'>
            Contact Us
          </Link>
        </nav>

        {/* Right side: Cart, Profile, and Login */}
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
                <p><strong>Username:</strong> John Doe</p>
                <p><strong>Email:</strong> johndoe@example.com</p>
                <Link to="/profile" className='text-blue-600 hover:underline'>View Profile</Link>
              </div>
            )}
          </div>

          <Link to="/cart" className='text-2xl relative text-white'>
            <FaShoppingCart />
            <div className='text-white w-5 h-5 rounded-full p-1 flex items-center justify-center bg-red-500 absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </Link>

          <Link 
            to="/login" 
            className="px-4 py-2 rounded-lg text-white bg-black hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
