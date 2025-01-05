import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
        <a className="footer-link" href="https://www.linkedin.com/in/louis-atkinson-449359151/" target="_blank" rel="noopener noreferrer">
          LINKEDIN
        </a>
        <a className="footer-link" href="https://github.com/LouisAtkinson" target="_blank" rel="noopener noreferrer">
          GITHUB
        </a>
    </footer>
  );
};

export default Footer;
