import React, { useRef, useEffect, useState } from 'react';
import './Project.css';
const eraserColors = [
  '#3498db', // Blue
  '#f1c40f', // Yellow
  '#e67e22', // Orange
  '#2c3e50', // Dark Blue
  '#145214'  // Dark Green
];


const Project = () => {
  const canvasRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);
  const [hasFilled, setHasFilled] = useState(false);
  const [readyToChange, setReadyToChange] = useState(false);

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    setupCanvas();

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [colorIndex]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = eraserColors[colorIndex];
    ctx.beginPath();
    ctx.arc(x, y, 200, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let paintedPixels = 0;
    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      if (!(r === 255 && g === 255 && b === 255)) {
        paintedPixels++;
      }
    }

    const ratio = paintedPixels / (canvas.width * canvas.height);

    if (ratio > 0.9 && !hasFilled) {
      setHasFilled(true);
      setReadyToChange(true);
    }

    if (hasFilled && readyToChange) {
      setColorIndex((prev) => (prev + 1) % eraserColors.length);
      setupCanvas();
      setHasFilled(false);
      setReadyToChange(false);
    }
  };

  return (
    <div className="project-container">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className="paint-canvas"
      />
      <div className="content-overlay">
        <div className="heading-container">
          <h1>Our Projects</h1>
          <h2>Crafting Excellence</h2>
          <h3>with Every Line of Code</h3>
        </div>
        <div className="centered-text">I’m VintaVerse</div>
      </div>
    </div>
  );
};

export default Project;




// import React, { useEffect, useRef, useState } from "react";
// import "./project.css";
// import Lenis from "@studio-freight/lenis";
// import { useTransform, useScroll, motion } from "framer-motion";

// const images = Array(12).fill("code2.jpg");

// const Column = ({ images, y }) => {
//   return (
//     <motion.div className="column" style={{ y }}>
//       {images.map((src, i) => (
//         <div key={i} className="imageContainer">
//           <img src={`/images/${src}`} alt="image" />
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default function Project() {
//   const gallery = useRef(null);
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });

//   const { scrollYProgress } = useScroll({
//     target: gallery,
//     offset: ["start end", "end start"],
//   });

//   const { height } = dimension;

//   const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
//   const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
//   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

//   useEffect(() => {
//     const lenis = new Lenis();

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     const resize = () => {
//       setDimension({ width: window.innerWidth, height: window.innerHeight });
//     };

//     window.addEventListener("resize", resize);
//     requestAnimationFrame(raf);
//     resize();

//     return () => {
//       window.removeEventListener("resize", resize);
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <main>
//       <div className="spacer"></div>
//       <div ref={gallery} className="gallery">
//         <Column images={[images[0], images[1], images[2]]} y={y} />
//         <Column images={[images[3], images[4], images[5]]} y={y2} />
//         <Column images={[images[6], images[7], images[8]]} y={y3} />
//         <Column images={[images[9], images[10], images[11]]} y={y4} />
//       </div>
//       <div className="spacer"></div>
//     </main>
//   );
// }
