import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Card.css";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ frontText, description, skills }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const cardInner = innerRef.current;
    const cardContainer = containerRef.current;

    gsap.set(cardInner, { rotateY: 0 });

    ScrollTrigger.create({
      trigger: cardContainer,
      start: "top 30%",
      end: "top 30%",
      scrub: true,
      onUpdate: (self) => {
        const rotation = gsap.utils.mapRange(0, 1, 0, 180, self.progress);
        gsap.to(cardInner, {
          rotateY: rotation,
          duration: 0.3,
          ease: "power1.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    
    <div className="card-container" ref={containerRef}>
      <div className="card-inner" ref={innerRef}>
        <div className="card-front">
          <p className="card-title">{frontText}</p>
          <p className="card-description">{description}</p>
          {skills && skills.length > 0 && (
            <ul className="card-skills">
              {skills.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="card-back">
          <img
            src="https://wallpaperaccess.com/full/2843501.jpg"
            alt="King"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
