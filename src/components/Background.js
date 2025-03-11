import React from 'react';
import '../css/background.css'; // Assuming you'll add your CSS styles in this file.

const ParticleEffect = () => {
  const particleCount = 30; // Number of particles to render

  return (
    <div id="particle-container">
      {Array.from({ length: particleCount }, (_, index) => (
        <div key={index} className="particle"></div>
      ))}
    </div>
  );
};

export default ParticleEffect;
