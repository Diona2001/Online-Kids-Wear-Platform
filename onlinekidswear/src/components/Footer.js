import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100  py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 py-20">
        
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-bold mt-4 ">About Us</h2>
          <p className="text-gray-700">
            KiddoChic is dedicated to offering stylish and comfortable clothing for kids. Our mission is to combine fashion with functionality, ensuring that every child looks and feels their best.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mt-4">Quick Links</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-900">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-900">Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-900">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-900">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gray-900">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mt-4">Contact Us</h2>
          <p className="text-gray-700">
            Email: <a href="mailto:info@kiddochic.com" className="hover:text-gray-900">info@kiddochic.com</a>
          </p>
          <p className="text-gray-700 mt-2">
            Phone: <a href="tel:+1234567890" className="hover:text-gray-900">+1 234 567 890</a>
          </p>
          <p className="text-gray-700 mt-2">
            Address: 123 Chic Street, Fashion City, USA
          </p>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-600">
        <p>&copy; 2024 KiddoChic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
