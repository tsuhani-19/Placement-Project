import React from 'react';
import { motion } from 'framer-motion';

const HigherStudiesPage = () => {
  return (
    <div className="bg-gradient-to-r from-green-800 to-emerald-900 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500"
        >
          Explore Higher Studies Opportunities
        </motion.h1>

        {/* Introduction Section */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-xl text-center text-gray-200 mb-12"
        >
         </motion.p>

        {/* Opportunities Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Master's Program Exams */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 text-gray-100 shadow-2xl rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/150/FF5733/FFFFFF?text=GATE+Exam"
              alt="GATE Exam"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">GATE Exam</h2>
              <p className="text-gray-300 mb-4">
                Prepare for the Graduate Aptitude Test in Engineering (GATE) to pursue your Master's degree in Engineering or secure jobs in top public sector units (PSUs).
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-bold text-yellow-400">Duration: </span>3 Hours
              </p>
            </div>
          </motion.div>

          {/* GRE Exam */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 text-gray-100 shadow-2xl rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/150/33FF57/FFFFFF?text=GRE+Exam"
              alt="GRE Exam"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">GRE Exam</h2>
              <p className="text-gray-300 mb-4">
                The Graduate Record Examination (GRE) is essential for students applying to graduate schools abroad. It’s a requirement for several engineering, computer science, and management programs.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-bold text-yellow-400">Duration: </span>3 Hours 45 Minutes
              </p>
            </div>
          </motion.div>

          {/* Ph.D. Exam */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 text-gray-100 shadow-2xl rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/150/33A0FF/FFFFFF?text=PhD+Exam"
              alt="PhD Exam"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Ph.D. Exams</h2>
              <p className="text-gray-300 mb-4">
                If you are looking to pursue research and make impactful contributions, a Ph.D. program is your path. Prepare for the entrance exams like CSIR NET and UGC NET to get into top universities.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-bold text-yellow-400">Duration: </span>3-5 Years
              </p>
            </div>
          </motion.div>

          {/* Professional Certifications Exams */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 text-gray-100 shadow-2xl rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/150/33A0FF/FFFFFF?text=Certifications+Exam"
              alt="Certifications Exam"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Professional Certifications</h2>
              <p className="text-gray-300 mb-4">
                Enhance your skills with certifications in specialized areas like networking, project management, data science, and more. Get prepared for exams that will boost your career.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-bold text-yellow-400">Duration: </span>6 Months - 1 Year
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold text-center text-emerald-700 mb-6">Get in Touch for Guidance</h2>
          <div className="bg-white shadow-lg p-6 rounded-lg max-w-3xl mx-auto border-2 border-emerald-500">
            <p className="text-lg text-gray-600 mb-4">
              If you're interested in exploring higher studies opportunities, don't hesitate to contact our counseling team. We're here to help you make the right choice.
            </p>
            <button
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HigherStudiesPage;
