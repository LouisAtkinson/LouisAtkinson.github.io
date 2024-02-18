import React, { useEffect, useState } from 'react';

const Home = () => {
  const [showHello, setShowHello] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showText, setShowText] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const startAnimation = () => {
    setTimeout(() => setShowHello(true), 0);
    setTimeout(() => setShowImage(true), 500);
    setTimeout(() => setShowName(true), 1000);
    setTimeout(() => setShowText(true), 1500);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (imageLoaded) {
      startAnimation();
    }
  }, [imageLoaded]);

  return (
    <div className="about">
      <div className="about-content">
        <div className="intro">
          <p className={`fade-in-left hello ${showHello ? 'active' : ''}`}>Hello!</p>
          <img
            src={require('../Images/me.jpeg')}
            alt="Your Name"
            className={`profile-image ${showImage ? 'fade-in active' : ''}`}
            onLoad={handleImageLoad}
          />
          <p className={`fade-in-right name ${showName ? 'active' : ''}`}>I'm <span className=''>Louis</span></p>
        </div>
        <div className={`intro-text ${showText ? 'active' : ''}`}>
          <p className="fade-in">
            I'm a <span className='pink'>full-stack </span><span className='green'>software developer</span>, currently based in Sheffield
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;