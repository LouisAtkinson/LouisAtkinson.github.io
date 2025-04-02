import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Monopoly Super Wheel Bonus',
      description: 'An online slot machine game built using the PixiJS and GSAP libraries. It was a complicated project, featuring multiple (sometimes simultaneous) bonuses, including cascades, expanding reels, and a pick game.',
      imageUrl: 'images/monopoly-super-wheel-bonus.jpg',
      projectUrl: 'https://slotslaunch.com/light-and-wonder/monopoly-super-wheel-bonus'
    },
    {
      title: 'Yukon Gold',
      description: 'An online slot machine game built using the PixiJS and GSAP libraries. Via the \'BUY PASS\', the hold\'n\'spin bonus can be seen, which combines masks, filters, animated sprites and Spine animations for a rich visual experience.',
      imageUrl: 'images/yukon-gold.jpg',
      projectUrl: 'https://slotslaunch.com/crucible-gaming/yukon-gold'
    },
    {
      title: 'Monster Catch',
      description: 'A slot machine game originally developed for casino cabinets, which I ported to web and mobile platforms. The performance was optimised to ensure smooth gameplay while preserving the high-quality visuals of the original.',
      imageUrl: 'images/monster-catch.jpg',
      projectUrl: 'https://slotslaunch.com/light-and-wonder/monster-catch'
    },
    {
      title: 'Socialise',
      description: 'A Facebook-inspired social media site built using React.js and Typescript on the front-end, and Express.js and MongoDB on the back-end. Users can sign up, customise their profiles, connect and interact with friends, create posts, and upload profile pictures. Authentication is secured using JSON Web Tokens (JWT).',
      imageUrl: 'images/socialise.jpg',
      projectUrl: 'https://socialise-lz3f.vercel.app',
      githubUrl: 'https://github.com/LouisAtkinson/socialise',
    }
  ];

  return (
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a className="project-main-link" href={project.projectUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.title} />
              <h3 className="project-title">{project.title}</h3>
            </a>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                View project
              </a>
              {project.githubUrl && (<a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
