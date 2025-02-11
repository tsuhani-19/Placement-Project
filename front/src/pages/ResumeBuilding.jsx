import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const ResumeBuilding = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  // Function to handle PDF generation
  const generateResume = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text('Resume', 20, 20);

    doc.setFontSize(16);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Phone: ${phone}`, 20, 60);
    
    doc.setFontSize(18);
    doc.text('Education:', 20, 80);
    doc.setFontSize(14);
    doc.text(education, 20, 90);

    doc.setFontSize(18);
    doc.text('Experience:', 20, 110);
    doc.setFontSize(14);
    doc.text(experience, 20, 120);

    doc.setFontSize(18);
    doc.text('Skills:', 20, 140);
    doc.setFontSize(14);
    doc.text(skills, 20, 150);

    // Save the PDF
    doc.save('resume.pdf');
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-800 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Build Your Resume
        </h1>
        
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl mx-auto">
          <form className="space-y-6">
            {/* Name and Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium text-gray-800">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-lg font-medium text-gray-800">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-col">
              <label htmlFor="education" className="text-lg font-medium text-gray-800">Education</label>
              <textarea
                id="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Enter your education details"
              />
            </div>

            {/* Experience */}
            <div className="flex flex-col">
              <label htmlFor="experience" className="text-lg font-medium text-gray-800">Experience</label>
              <textarea
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Enter your work experience"
              />
            </div>

            {/* Skills */}
            <div className="flex flex-col">
              <label htmlFor="skills" className="text-lg font-medium text-gray-800">Skills</label>
              <textarea
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Enter your skills"
              />
            </div>

            {/* Download Button */}
            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={generateResume}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              >
                Download Resume
              </button>
            </div>
          </form>
        </div>

        {/* Preview Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Resume Preview</h2>
          <div className="bg-white shadow-lg p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold">{name}</h3>
            <p className="text-lg text-gray-600">{email} | {phone}</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6">Education</h4>
            <p className="text-gray-600">{education}</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6">Experience</h4>
            <p className="text-gray-600">{experience}</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6">Skills</h4>
            <p className="text-gray-600">{skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilding;
