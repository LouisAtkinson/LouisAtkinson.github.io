import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <p>&#169; {currentYear} Louis Atkinson</p>
    </footer>
  );
};

export default Footer;
