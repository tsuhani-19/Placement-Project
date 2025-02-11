import React, { useState } from 'react';
import Modal from 'react-modal';

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

  const openModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <div className="bg-gradient-to-b from-emerald-800 via-emerald-900 to-emerald-950 text-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Our College's Key Programs
        </h1>
        <p className="text-center text-lg text-gray-200 mb-12">
          Explore the various programs we offer that inspire innovation, entrepreneurship, and research at our college.
        </p>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              onClick={() => openModal(program)}
              className="bg-gray-800 text-gray-100 shadow-2xl rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105 cursor-pointer"
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
            </div>
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
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">{selectedProgram?.name}</h2>
        <p className="text-lg text-gray-300 mb-4">{selectedProgram?.description}</p>
        <p className="text-sm text-gray-400 mb-6">
          <span className="font-bold text-yellow-400">Duration: </span>{selectedProgram?.duration}
        </p>
        <button
          onClick={closeModal}
          className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default EntrepreneurshipPage;
