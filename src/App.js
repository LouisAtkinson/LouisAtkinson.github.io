import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Import the CSS for styling
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={< About />} />
          <Route path="/portfolio" element={< Portfolio />} />
          <Route path="/contact" element={< Contact />} />a
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;