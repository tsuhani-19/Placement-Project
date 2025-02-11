import React from 'react';
import { Link } from 'react-router-dom';
import { FaUniversity, FaChalkboardTeacher, FaLanguage, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HigherStudies = () => {
  const exams = [
    { name: 'GATE (Graduate Aptitude Test in Engineering)', icon: <FaChalkboardTeacher />, path: '/higher-studies/gate' },
    { name: 'GRE (Graduate Record Examination)', icon: <FaUniversity />, path: '/higher-studies/gre' },
    { name: 'TOEFL (Test of English as a Foreign Language)', icon: <FaLanguage />, path: '/higher-studies/toefl' },
    { name: 'IELTS (International English Language Testing System)', icon: <FaLanguage />, path: '/higher-studies/ielts' },
    { name: 'CAT (Common Admission Test)', icon: <FaChartLine />, path: '/higher-studies/cat' },
    { name: 'GMAT (Graduate Management Admission Test)', icon: <FaChartLine />, path: '/higher-studies/gmat' },
    { name: 'UPSC (Union Public Service Commission)', icon: <FaChalkboardTeacher />, path: '/higher-studies/upsc' },
    { name: 'IES (Indian Engineering Services)', icon: <FaUniversity />, path: '/higher-studies/ies' },
  ];

  return (
    <motion.div 
    initial={{opacity:0,y:100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1,y:0}}
         viewport={{once: true}} 
    
    className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white min-h-screen flex justify-center items-center p-8">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-100">
          Higher Studies Opportunities
        </h1>
        <p className="text-2xl mb-12 text-center text-gray-300 font-medium">
          Explore the various exams available after completing your engineering degree:
        </p>

        {/* Floating Tiles for Exams */}
        <div className="flex justify-center gap-8 flex-wrap">
          {exams.map((exam, index) => (
            <Link to={exam.path} key={index}>
              <div className="transform transition-all duration-300 ease-in-out bg-white text-gray-800 rounded-xl p-8 shadow-xl hover:scale-110 hover:translate-y-[-10px] relative overflow-hidden">
                <div className="text-4xl text-emerald-500">{exam.icon}</div>
                <div className="mt-4 text-xl font-semibold">{exam.name}</div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-40 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HigherStudies;
