import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; // Import the CSS for styling
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import MobileNav from './Components/MobileNav';

const App = () => {
  const location = useLocation();

  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const checkScreenWidth = () => {
    if (window.innerWidth > 768) {
      setIsMobileNavOpen(false);  
    }
  };

  React.useEffect(() => {
    checkScreenWidth(); 
    window.addEventListener('resize', checkScreenWidth); 

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  
  return (
    <div className="app">
      {location.pathname !== "/" && <Header 
        isMobileNavOpen={isMobileNavOpen} 
        onMobileNavToggle={handleMobileNavToggle} 
      />}
      <main className="content">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/portfolio" element={< Portfolio />} />
          <Route path="/contact" element={< Contact />} />a
        </Routes>
        <MobileNav isOpen={isMobileNavOpen} onClose={() => {setIsMobileNavOpen(false)}}/>
      </main>
      <Footer />  
    </div>
  );
};

export default App;