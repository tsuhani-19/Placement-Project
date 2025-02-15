import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const programs = [
  {
    name: 'E-Cell (Entrepreneurship Cell)',
    description:
      'A platform to foster entrepreneurship among students by organizing workshops, networking events, and startup accelerators.',
    duration: 'Ongoing',
    image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=E-Cell',
  },
  {
    name: 'R&D Cell (Research & Development Cell)',
    description:
      'A cell dedicated to innovation, research, and development, providing students with opportunities to work on cutting-edge projects.',
    duration: 'Year-round',
    image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=R&D+Cell',
  },
  {
    name: 'Innovation Hub',
    description:
      'An incubator for student-led startups, offering mentoring, funding opportunities, and access to industry experts.',
    duration: '6 Months',
    image: 'https://via.placeholder.com/150/33A0FF/FFFFFF?text=Innovation+Hub',
  },
  {
    name: 'Tech Fest',
    description:
      'An annual tech fest that brings together innovators, entrepreneurs, and industry leaders to showcase their technologies and ideas.',
    duration: '2 Days',
    image: 'https://via.placeholder.com/150/9933FF/FFFFFF?text=Tech+Fest',
  },
];

const EntrepreneurshipPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [events, setEvents] = useState([]); // State to hold events

  useEffect(() => {
    // Fetch events when a program is selected
    if (selectedProgram) {
      fetch(`http://localhost:5000/events/${selectedProgram.name}`)
        .then((response) => response.json())
        .then((data) => setEvents(data))
        .catch((error) => console.error('Error fetching events:', error));
    }
  }, [selectedProgram]);

  const openModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
    setEvents([]); // Clear events when modal is closed
  };

  return (
    <div className="bg-gradient-to-b from-emerald-800 via-emerald-900 to-emerald-950 text-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
        >
          Our College's Key Programs
        </motion.h1>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              onClick={() => openModal(program)}
              className="bg-gray-800 text-gray-100 shadow-2xl rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">{program.name}</h2>
                <p className="text-gray-300 mb-4">{program.description}</p>
                <p className="text-sm text-gray-400">
                  <span className="font-bold text-yellow-400">Duration: </span>{program.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content bg-gray-800 text-white rounded-lg p-6"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-yellow-400 mb-4"
        >
          {selectedProgram?.name}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300 mb-4"
        >
          {selectedProgram?.description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm text-gray-400 mb-6"
        >
          <span className="font-bold text-yellow-400">Duration: </span>{selectedProgram?.duration}
        </motion.p>

        {/* Display events dynamically */}
        {events.length > 0 && (
          <div className="events-section mt-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Upcoming Events:</h3>
            <ul className="list-disc pl-5">
              {events.map((event, index) => (
                <li key={index} className="text-gray-300 mb-2">
                  <span className="font-bold">{event.eventName}</span> - <span className="text-gray-400">{new Date(event.eventDate).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <motion.button
          onClick={closeModal}
          className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </Modal>
    </div>
  );
};

export default EntrepreneurshipPage;
