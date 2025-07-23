// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
      <p className="text-gray-400 font-bold font-mono mb-4 text-sm">
      "The development of full Artificial Intelligence could spell the end of the human race."
        </p>
        <p className="text-gray-400 font-bold font-mono mb-4 text-sm">
          &copy; {new Date().getFullYear()} Niranjan Paramasivan. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}

export default Footer;