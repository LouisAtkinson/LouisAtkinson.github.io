import React, { useEffect, useState } from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className={`about-text active`}>
          <h2>Welcome!</h2>
          <p className="fade-in">
            I'm Louis Atkinson, a Sheffield-based software developer. 
            My current role is in front-end game development using Pixi.js, 
            where I take pride in creating engaging and visually stunning user experiences.
          </p>
          <p className="fade-in">
            Outside of game development, I am skilled in full-stack development, 
            as showcased in my portfolio.
            I have a passion for crafting responsive user interfaces using React.js, 
            and my skills 
            extend to creating feature-rich applications with technologies like Express.js.
          </p>        
          <p className="fade-in">
            If you're looking for a developer who appreciates the balance between innovation and practicality, 
            feel free to explore my portfolio and reach out with any questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
