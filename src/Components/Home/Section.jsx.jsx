import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bgImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80";

export default function Section() {
  const container = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!container.current || !imageRef.current) return;

    const anim = gsap.to(imageRef.current, {
      yPercent: 20, // moves 20% down
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
        <p style={{ fontSize: "2vw", textTransform: "uppercase"  }}>
          Crafting innovative solutions that blend creativity and technology, delivering excellence with precision and passion.
        </p>
        <p style={{ fontSize: "5vw",  lineHeight: "1", margin:"0", textTransform: "uppercase" }}>Creative Innovation</p>
      </div>

      <div style={{ position: "fixed", top: "-10vh", left: 0, width: "100%", height: "120vh", zIndex: 0, overflow: "hidden" }}>
        <img
          ref={imageRef}
          src={bgImage}
          alt="background"
          style={{ width: "100%", height: "100%", objectFit: "cover", willChange: "transform" }}
        />
      </div>
    </div>
  );
}
