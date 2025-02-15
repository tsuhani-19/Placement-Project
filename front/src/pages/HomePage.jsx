import React from 'react';
import appMainImg from '../assets/app_main_img.png'; // Adjust the path
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="homepage bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-r from-emerald-800 to-green-600">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            A Better Path to <span className="text-emerald-400">More Opportunity</span>
          </h1>
          <p className="mt-4 text-emerald-200 text-lg md:text-xl">
            Discover new ways to enhance your career and education with our comprehensive resources, designed to give you the edge.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transform transition duration-300 ease-in-out"
            whileHover={{ scale: 1.1, boxShadow: "0 4px 15px rgba(0, 255, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
        {/* Image Content */}
        <motion.div
          className="max-w-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={appMainImg}
            alt="App Main"
            className="w-full h-auto rounded-md shadow-lg transform transition-all"
          />
        </motion.div>
      </div>

      {/* Additional Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="py-16 bg-gradient-to-l from-green-600 to-emerald-800 text-center"
      >
        <h2 className="text-3xl md:text-4xl text-white font-bold">
          Ready to transform your future? <span className="text-emerald-400">Take the first step today!</span>
        </h2>
        <motion.button
          className="mt-6 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 255, 0, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Join Us Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomePage;
