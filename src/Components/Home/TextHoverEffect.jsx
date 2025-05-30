"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import "./TextHoverEffect.css"; // External CSS import

export const TextHoverEffect = ({ text = "Hover Me", duration = 0.5 }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const cx = ((cursor.x - rect.left) / rect.width) * 100;
      const cy = ((cursor.y - rect.top) / rect.height) * 100;
      setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
    }
  }, [cursor]);

  return (
    <div className="text-hover-container">
      <svg
        ref={svgRef}
        className="text-hover-svg"
        viewBox="0 0 600 100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      >
        <defs>
          <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="25%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{ duration, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="textMask">
            <rect width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>

        {/* Base Outline */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-outline"
        >
          {text}
        </text>

        {/* Hover Gradient Reveal */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-gradient"
          mask="url(#textMask)"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};
