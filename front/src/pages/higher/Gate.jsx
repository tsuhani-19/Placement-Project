import React from 'react'

const Gate = () => {
  return (
    <div>Gate</div>
  )
}

export default Gate


// import React, { useState,useEffect } from 'react';
// import { FaBookOpen, FaRegPaperPlane, FaRegCalendarCheck } from 'react-icons/fa';
// import api from '../services/api'

// const Gate = () => {
//   const [isSyllabusOpen, setSyllabusOpen] = useState(false);
//   const [isPapersOpen, setPapersOpen] = useState(false);
//   const [isTipsOpen, setTipsOpen] = useState(false);
//   const [isDatesOpen, setDatesOpen] = useState(false);
//   useEffect(() => {
//     // Fetch Past Year Papers
//     axios.get('http://localhost:5000/api/pastyearpapers')
//       .then(response => {
//         setPastYearPapers(response.data);
//       })
//       .catch(error => console.error("Error fetching past year papers", error));

//     // Fetch Syllabus Data
//     axios.get('http://localhost:5000/api/syllabus')
//       .then(response => {
//         setSyllabusData(response.data);
//       })
//       .catch(error => console.error("Error fetching syllabus", error));

//     // Fetch Exam Dates
//     axios.get('http://localhost:5000/api/examdates')
//       .then(response => {
//         setExamDates(response.data);
//       })
//       .catch(error => console.error("Error fetching exam dates", error));

//     // Fetch Updates
//     axios.get('http://localhost:5000/api/updates')
//       .then(response => {
//         setUpdates(response.data);
//       })
//       .catch(error => console.error("Error fetching updates", error));
//   }, []); // Empty dependency array means this will run only once when the component mounts



//   const closeModal = () => {
//     setSyllabusOpen(false);
//     setPapersOpen(false);
//     setTipsOpen(false);
//     setDatesOpen(false);
//   };

//   return (
//     <div className="bg-gradient-to-r from-teal-900 to-emerald-700 text-white min-h-screen py-12 px-6">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-extrabold tracking-tight text-gray-100 mb-4">
//             GATE (Graduate Aptitude Test in Engineering)
//           </h1>
//           <p className="text-xl mt-4 text-gray-300 mb-6">
//             Everything you need to know about GATE: Past Year Papers, Syllabus, and Preparation
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-6">
//             <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
//               <h2 className="text-3xl font-bold text-teal-600 mb-4">GATE Exam Overview</h2>
//               <p className="text-lg text-gray-700 mb-4">
//                 The GATE exam is an all-India entrance test conducted jointly by the IITs and IISc. It is required for admission to postgraduate programs in engineering and technology, as well as for various public sector jobs.
//               </p>
//               <p className="text-lg text-gray-700">
//                 The exam tests knowledge in various engineering disciplines and is a stepping stone for aspiring engineers to pursue higher studies or job opportunities.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div
//                 className="bg-teal-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => setSyllabusOpen(true)}
//                 aria-label="Open GATE Syllabus"
//               >
//                 <FaBookOpen className="text-4xl mb-4" />
//                 <h3 className="text-xl font-bold">GATE Syllabus</h3>
//                 <p className="text-gray-100 mt-2">
//                   Access the detailed syllabus of GATE for all engineering disciplines.
//                 </p>
//               </div>

//               <div
//                 className="bg-teal-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => setDatesOpen(true)}
//                 aria-label="Open Exam Dates"
//               >
//                 <FaRegCalendarCheck className="text-4xl mb-4" />
//                 <h3 className="text-xl font-bold">Exam Dates</h3>
//                 <p className="text-gray-100 mt-2">
//                   Stay updated with the GATE exam schedule.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//               <div
//                 className="bg-teal-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => setPapersOpen(true)}
//                 aria-label="Open Past Year Papers"
//               >
//                 <FaRegPaperPlane className="text-4xl mb-4" />
//                 <h3 className="text-xl font-bold">Past Year Papers</h3>
//                 <p className="text-gray-100 mt-2">
//                   Download previous year's GATE papers.
//                 </p>
//               </div>

//               <div
//                 className="bg-teal-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 onClick={() => setTipsOpen(true)}
//                 aria-label="Open Preparation Tips"
//               >
//                 <FaRegPaperPlane className="text-4xl mb-4" />
//                 <h3 className="text-xl font-bold">Preparation Tips</h3>
//                 <p className="text-gray-100 mt-2">
//                   Learn effective strategies for GATE preparation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Modals */}
//         {isSyllabusOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate__animated animate__fadeIn">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-[80vh] overflow-y-auto">
//               <h3 className="text-2xl font-bold mb-4">GATE Syllabus</h3>

//               <div className="mt-4">
//                 <h4 className="font-bold text-lg mb-2">Computer Science and Engineering</h4>
//                 <p className="text-gray-700">
//                   The syllabus for Computer Science and Engineering (CSE) includes topics like Data Structures, Algorithms, Operating Systems, Databases, Networks, and more.
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <h4 className="font-bold text-lg mb-2">Electrical Engineering</h4>
//                 <p className="text-gray-700">
//                   Electrical Engineering syllabus includes topics such as Electrical Circuits, Machines, Power Systems, Signal Processing, and more.
//                 </p>
//               </div>

//               {/* More branches can go here */}

//               <button
//                 onClick={closeModal}
//                 className="mt-4 p-2 bg-teal-600 text-white rounded-full"
//                 aria-label="Close Modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Repeat for other modals with minor updates */}
//       </div>
//     </div>
//   );
// };

// export default Gate;
