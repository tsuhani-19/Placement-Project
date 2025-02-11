import React from 'react';
import appMainImg from '../assets/app_main_img.png'; // Adjust the path
import {motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="homepage bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-emerald-800">
        {/* Text Content */}
        <motion.div
         initial={{opacity:0,y:100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1,y:0}}
         viewport={{once: true}} 
        className="max-w-lg mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A Better Path to <span className="text-emerald-400">More Opportunity</span>
          </h1>
          <p className="mt-4 text-emerald-200">
            Discover new ways to enhance your career and education with our comprehensive resources.
          </p>
          <button className="mt-6 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700">
            Get Started
          </button>
        </motion.div>
        {/* Image Content */}
        <div className="max-w-lg">
          <img src={appMainImg} alt="App Main" className="w-full h-auto rounded-md shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
