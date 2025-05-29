import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Section.css'; // CSS for video background

gsap.registerPlugin(ScrollTrigger);

export default function Section() {
  const container = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!container.current || !videoRef.current) return;

    const anim = gsap.to(videoRef.current, {
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
      anim.scrollTrigger && anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={container}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "2rem",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div style={{ position: "relative", zIndex: 10, maxWidth: "50vw", textAlign: "right", mixBlendMode: "difference" }}>
        <p style={{ fontSize: "2vw", textTransform: "uppercase" }}>
          Crafting innovative solutions that blend creativity and technology, delivering excellence with precision and passion.
        </p>
        <p style={{ fontSize: "5vw", lineHeight: "1", margin: "0", textTransform: "uppercase" }}>
          Creative Innovation
        </p>
      </div>

      <div className="video-background">
        <video
          ref={videoRef}
          src="/src/assets/2nd.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="video-element"
        />
      </div>
    </div>
  );
}
