import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Intro.css";

gsap.registerPlugin(ScrollTrigger);

const bgImage = "https://cdn.pixabay.com/photo/2024/06/22/18/09/ai-generated-8846759_1280.jpg";

export default function Intro() {
  const container = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!container.current || !imageRef.current) return;

    const anim = gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div ref={container} className="intro-container">
      <div className="intro-text">
        <p>We turn concepts into experiences that inspire, engage, and innovate.</p>
        <p>Visionary Design</p>
      </div>

      <div className="intro-bg-wrapper">
        <img ref={imageRef} src={bgImage} alt="intro background" className="intro-bg-image" />
      </div>
    </div>
  );
}
