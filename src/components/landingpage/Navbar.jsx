import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="flex justify-center fixed top-4 left-0 right-0 z-50">
      <nav className="bg-zinc-900 text-white font-light text-sm rounded-full px-6 py-3 shadow-md flex items-center space-x-8 max-w-5xl w-full justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-white text-sm font-medium">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Interactive Buttons */}
        <div className="flex space-x-2 group">
          <Link
            to="/login"
            className="border border-white px-4 py-1 rounded-full transition group-hover:bg-white group-hover:text-black"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-white text-black px-4 py-1 rounded-full transition group-hover:bg-transparent group-hover:text-white group-hover:border group-hover:border-white"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;