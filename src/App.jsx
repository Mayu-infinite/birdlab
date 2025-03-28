import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import People from './pages/People';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Collaborations from './pages/Collaborations';
import Contact from './pages/Contact';

import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;