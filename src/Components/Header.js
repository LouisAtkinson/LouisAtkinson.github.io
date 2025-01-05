import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isMobileNavOpen, onMobileNavToggle }) => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="left">
        <p className="logo">
          <Link to="/">LOUIS <span className="pink">ATKINSON</span></Link>
        </p>
      </div>
      <div className="right">
        {!isMobileNavOpen && (
          <div className="burger-menu" onClick={onMobileNavToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
        {isMobileNavOpen && (
          <div className="close-button" onClick={onMobileNavToggle}>
            &times;
          </div>
        )}
        <nav className="nav">
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            ABOUT
          </Link>
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}
          >
            PORTFOLIO
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;