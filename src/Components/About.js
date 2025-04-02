import React, { useState } from 'react';

const About = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className={`about-text ${!showCV ? 'active' : ''}`}>
          <h2>ABOUT</h2>
          <p className="fade-in">
          Hello! I’m Louis Atkinson, a Sheffield-based software developer with a passion for solving complex problems and learning new technologies. 
          In my current role, I specialise in full-stack development, with experience in game development using Java and JavaScript. 
          I take pride in creating efficient, well-designed systems that deliver a great user experience. Some of my work can be seen in my portfolio.
          </p>
          {
        //     <p className="fade-in">
        //   While my professional work currently focuses on the front-end, I’m equally comfortable across the entire stack. 
        //   In my free time, I enjoy building full-stack applications, 
        //   which allows me to sharpen both my front-end and back-end skills and learn new technologies. 
        //   This enables me to tackle a wide range of challenges, from crafting intuitive interfaces to implementing efficient back-end logic, 
        //   ensuring everything works seamlessly.
        // </p>

          }
          
          {
          //   false && (
          //   <p className="fade-in">
          //     I’m driven by the opportunity to grow as a developer, always seeking to improve and tackle new challenges. 
          //     For example, I’m currently working towards the AWS Solutions Architect Associate certification and 
          //     applying these skills in the development of a chess website.
          //   </p>
          // )
        }
          {
            //   <p>
            //   If you’re looking for a developer who’s adaptable, eager to learn, and proficient across both the front-end and back-end, 
            //   feel free to explore my portfolio or get in touch.
            // </p>
          }

        </div>

        {showCV && (
          <div className={`about-text cv ${showCV ? 'active' : ''}`}>
            <embed 
              src="/assets/Louis-Atkinson-CV.pdf" 
              type="application/pdf" 
              width="100%" 
              height="100%" 
              style={{ maxHeight: '1120px', objectFit: 'contain' }}
            />
            <a href="/assets/Louis-Atkinson-CV.pdf" download className="download-btn">
              DOWNLOAD CV
            </a>
          </div>
        )}
      </div>

      <div className="about-buttons">
        <button 
          className={`btn ${!showCV ? 'active' : ''}`} 
          onClick={() => setShowCV(false)}
        >
          ABOUT
        </button>
        <button 
          className={`btn ${showCV ? 'active' : ''}`} 
          onClick={() => setShowCV(true)}
        >
          CV
        </button>
      </div>
    </div>
  );
};

export default About;