import React, { useRef, useEffect } from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ projects, reversed }) => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const xDelta = xPercent - currentXPercent;
    currentXPercent += xDelta * speed;

    const firstImagePercent = 66.66 - (currentXPercent * 0.33);
    const secondImagePercent = 33.33 + (currentXPercent * 0.33);

    if (firstImage.current && secondImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div className={`double ${reversed ? 'reversed' : ''}`} onMouseMove={manageMouseMove}>
      <div ref={firstImage} className="imageContainer">
        <div className="stretchyWrapper">
          <img src={projects[0].src} alt="project" />
        </div>
        <div className="body">
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      <div ref={secondImage} className="imageContainer">
        <div className="stretchyWrapper">
          <img src={projects[1].src} alt="project" />
        </div>
        <div className="body">
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
