import React, { useState } from 'react';
import GradientCursor from './GradientCursor';

export default function Scene2() {
    const sentence = "Vintaverse is a Creative IT Surgeon";
    const words = sentence.split(" ");

    const [activeWordIndex, setActiveWordIndex] = useState(null);

    return (
        <div className="scene2-wrapper h-screen flex items-center justify-center bg-white relative overflow-hidden">
  <h1 className="text-[4.5vw] max-w-[90vw] text-center text-black p-20 leading-snug">
  {words.map((word, i) => (
    <span
      key={i}
      onMouseEnter={() => setActiveWordIndex(i)}
      onMouseLeave={() => setActiveWordIndex(null)}
      className={`inline-block transition-transform duration-300 ${
        activeWordIndex === i ? 'scale-225' : 'scale-100'
      }`}
      style={{ marginRight: '0.25em' }}  // add right margin for spacing
    >
      {word}
    </span>
    ))}
    </h1>
    <GradientCursor isActive={activeWordIndex !== null} />
        </div>
    );
}
