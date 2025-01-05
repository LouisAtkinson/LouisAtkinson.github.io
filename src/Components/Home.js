import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showName, setShowName] = useState(false);
  const [showNavItems, setShowNavItems] = useState([false, false, false]);

  useEffect(() => {
    // Trigger animations
    setShowName(true);
    const navItemDelays = [200, 400, 600];
    navItemDelays.forEach((delay, index) => {
      setTimeout(() => {
        setShowNavItems((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, delay);
    });
  }, []);

  return (
    <div className="home-content">
      <div className="intro">
        <p className={`name ${showName ? 'fade-in' : ''}`}>
          LOUIS <span className="pink">ATKINSON</span>
        </p>
      </div>
      <div className="centered-nav-container">
        <nav className="centered-nav">
          {['ABOUT', 'PORTFOLIO', 'CONTACT'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className={`centered-nav-link ${showNavItems[index] ? 'fade-in' : ''}`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Home;