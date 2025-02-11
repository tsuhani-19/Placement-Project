import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-emerald-400">
              MyApp
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-lg text-white hover:bg-emerald-700 hover:shadow-md px-4 py-2 rounded transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/higher-studies"
              className="text-lg text-white hover:bg-emerald-700 hover:shadow-md px-4 py-2 rounded transition duration-300 font-medium"
            >
              Higher Studies
            </Link>
            <Link
              to="/entrepreneurship"
              className="text-lg text-white hover:bg-emerald-700 hover:shadow-md px-4 py-2 rounded transition duration-300 font-medium"
            >
              Entrepreneurship
            </Link>
            <Link
              to="/resume-building"
              className="text-lg text-white hover:bg-emerald-700 hover:shadow-md px-4 py-2 rounded transition duration-300 font-medium"
            >
              Resume Building
            </Link>
            <Link
              to="/placement"
              className="text-lg text-white hover:bg-emerald-700 hover:shadow-md px-4 py-2 rounded transition duration-300 font-medium"
            >
              Placement
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
