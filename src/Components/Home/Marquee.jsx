import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import Video1 from '/src/assets/myvideo.mp4';  
import Video2 from '/src/assets/myvideo.mp4';
import Video3 from '/src/assets/myvideo.mp4';

import './Marquee.css'; // CSS unchanged, sirf video ke liye width/height thoda dekh lena

export default function Marquee() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="marquee-main">
      <div className="marquee-spacer"></div>
      <div ref={container}>
        <Slide src={Video1} direction="left" left="-100%" progress={scrollYProgress} />
        <Slide src={Video2} direction="right" left="-85%" progress={scrollYProgress} />
        <Slide src={Video3} direction="left" left="-100%" progress={scrollYProgress} />
      </div>
      <div className="marquee-spacer"></div>
    </main>
  );
}

const Slide = ({ src, direction, left, progress }) => {
  const dir = direction === 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * dir, -150 * dir]);

  return (
    <motion.div
      style={{ x: translateX }}
      className="marquee-slide"
      data-left={left}
    >
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className="marquee-phrase">
      <p className="marquee-title">Web Designer</p>
      <p className="marquee-subtitle">UI/UX Designer</p>
      <p className="marquee-subtitle">Creative Coder</p>
      <span className="marquee-image-wrapper">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="marquee-image"
        />
      </span>
    </div>
  );
};
