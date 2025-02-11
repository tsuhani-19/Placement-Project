import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import HomePage from './pages/HomePage.jsx';
import HigherStudies from './pages/higher/HigherStudies.jsx';
import Gate from './pages/higher/Gate.jsx';  // Import the Gate page
import Entrepreneurship from './pages/Entrepreneurship.jsx';
import ResumeBuilding from './pages/ResumeBuilding.jsx';
import Placement from './pages/Placement.jsx';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page route */}
          <Route path="/higher-studies" element={<HigherStudies />} /> {/* Higher Studies page */}
          <Route path="/higher-studies/gate" element={<Gate />} /> {/* Gate page */}
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/resume-building" element={<ResumeBuilding />} />
          <Route path="/placement" element={<Placement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
