import React, { useEffect } from 'react';

export default function BurstAnimation() {
  const name = 'Aatif Ayman'; 
  const characters = name.split(''); 

  return (
    <div className="flex flex-col items-center justify-center border border-black h-screen">
      <div className="flex space-x-2">
        {/* Loop through characters */}
        {characters.map((char, index) => (
          <span
            key={index}
            className="font-sign text-4xl md:text-6xl lg:text-9xl animate-burst opacity-0"
            style={{
              animationDelay: `${index * 0.2}s`, // Stagger the animation
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
