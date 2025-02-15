import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Placement = () => {
  const [selectedCompany, setSelectedCompany] = useState('');

  const companies = [
    'Google', 'Amazon', 'Media.net', 'Wipro', 'Deloitte', 'Microsoft', 'IBM', 'TCS', 'Accenture', 'Infosys',
    'Gupshup', 'Persolkelly', 'Zeus Learning', 'Sogolytics', 'Nucsoft', 'Neosoft', 'Team Computers', 'Ugam', 'Mastek', 'Jio', 'Reliance'
  ];

  return (
    <div className="bg-gradient-to-r from-green-800 to-emerald-900 min-h-screen p-8">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
          Placement Opportunities
        </h1>
        
        <div className="flex justify-between gap-12">
          {/* Left Section: Search Bar with Stages */}
          <div className="w-96 bg-white p-6 rounded-lg shadow-xl relative max-h-96 overflow-y-auto">
            <label htmlFor="companySearch" className="text-lg font-medium text-emerald-700">Search for a Company</label>
            <select
              id="companySearch"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full p-4 mt-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
            >
              <option value="" disabled>Select a company</option>
              {companies.map((company, index) => (
                <option key={index} value={company}>{company}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-500">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Below Search Bar: Stages */}
            <div className="mt-4 space-y-2">
              <div className="p-3 bg-emerald-100 rounded-lg shadow-sm cursor-pointer hover:bg-emerald-200 transition">
                Aptitude Test
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg shadow-sm cursor-pointer hover:bg-emerald-200 transition">
                Technical Round
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg shadow-sm cursor-pointer hover:bg-emerald-200 transition">
                GD Round
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg shadow-sm cursor-pointer hover:bg-emerald-200 transition">
                Interview
              </div>
            </div>
          </div>

          {/* Right Section: Companies Logos */}
          <div className="w-2/3 flex flex-wrap justify-center gap-10">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="w-24 h-24 bg-white rounded-full shadow-xl flex justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
              >
                <img
                  src={`https://via.placeholder.com/100?text=${company}`}
                  alt={company}
                  className="w-16 h-16 object-contain"
                />
              </motion.div>
            ))}
            {/* 'And Many More' Text */}
            <motion.div
              className="w-24 h-24 bg-white rounded-full shadow-xl flex justify-center items-center text-center text-emerald-500 font-semibold text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: companies.length * 0.1, type: 'spring', stiffness: 120 }}
            >
              <span>And Many More</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
