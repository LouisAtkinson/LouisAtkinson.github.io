import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Socialise',
      description: 'A Facebook-inspired social media site built using React.js and Typescript on the front-end, and Express.js and MongoDB on the back-end',
      imageUrl: 'images/socialise.png',
      projectUrl: 'https://socialise-lz3f.vercel.app',
      githubUrl: 'https://github.com/LouisAtkinson/socialise',
    },
    {
      title: 'React store',
      description: 'A modern web store built using React.js',
      imageUrl: 'images/react-store.png',
      projectUrl: 'https://louisatkinson.co.uk/react-store',
      githubUrl: 'https://github.com/LouisAtkinson/react-store',
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
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
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
