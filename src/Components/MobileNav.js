import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <nav className="mobile-nav-content">
        <Link to="/about" onClick={onClose} className={location.pathname === '/about' ? 'mobile-nav-link active' : 'mobile-nav-link'}>
          ABOUT
        </Link>
        <Link to="/portfolio" onClick={onClose} className={location.pathname === '/portfolio' ? 'mobile-nav-link active' : 'mobile-nav-link'}>
          PORTFOLIO
        </Link>
        <Link to="/contact" onClick={onClose} className={location.pathname === '/contact' ? 'mobile-nav-link active' : 'mobile-nav-link'}>
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;