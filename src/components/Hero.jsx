// src/components/Hero.jsx
import React from 'react';
import yourImage from '../assets/png/My_img.png'; // Make sure this path is correct!

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-end pt-20 pb-0">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Column: Text Content */}
        <div className="text-left py-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-shadow-lg font-serif font-extrabold text-dark-text leading-tight mb-6 animate-fadeIn">
            Building <span className="text-gray-700">Scalable AI</span> &amp; <span className="text-gray-700">Cloud Solutions</span>.
          </h2>
          <p className="text-lg sm:text-xl font-medium text-shadow-md font-mono text-black max-w-5xl mb-10 animate-fadeIn delay-200">
          In the quiet of solitude, purpose sharpens, and creativity ignites; 
          because the boldest ideas are born when the world is silent and the soul is loud.
          </p>
          <a
            href="#projects"
            className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg sm:text-xl font-mono font-bold
                       hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl animate-fadeIn delay-50"
          >
            VIEW MY WORK
          </a>
        </div>

        {/* Right Column: Your Image with Clip-Path for a cutout effect */}
        {/* We add a container div for overflow hidden and relative positioning if needed */}
        <div className="flex md:overflow-hidden relative">
          <img
            src={yourImage}
            alt="Your Profile"
            // Apply the custom CSS class for clip-path here
            // className="w-full h-auto object-cover object-right shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;