import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-green-900 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="/pages/higherstudies" className="hover:text-emerald-300 transition duration-300">Higher Studies</a>
          <a href="/pages/entrepreneurship" className="hover:text-emerald-300 transition duration-300">Entrepreneurship</a>
          <a href="/pages/resumebuilding" className="hover:text-emerald-300 transition duration-300">Resume Building</a>
          <a href="/pages/placement" className="hover:text-emerald-300 transition duration-300">Placement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
