// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Your Name */}
        <a href="#" className="text-xl sm:text-2xl font-serif text-shadow-lg font-bold text-black no-underline
                                hover: transition-all duration-300 
                                hover:text-gray-700">
          Niranjan Paramasivan
        </a>

        {/* Navigation */}
        <nav className="hidden sm:block"> {/* Hide on small screens, show on sm and up */}
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-black text-xl font-mono font-semibold text-shadow-lg
                                        hover: transition-colors duration-200
                                        hover:text-gray-700">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#skills" className="text-black text-xl font-mono font-semibold text-shadow-lg
                                        hover: transition-colors duration-200
                                        hover:text-gray-700">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#projects" className="text-black text-xl font-mono font-semibold text-shadow-lg
                                             hover:text-gray-700 
                                             transition-colors duration-200">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black text-xl font-mono font-semibold text-shadow-lg
                                            hover:text-gray-700 
                                            transition-colors duration-200">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button (Optional: Implement with useState for toggling) */}
        <button className="sm:hidden text-black focus:outline-none">
          {/* You'd replace this with an SVG icon for a hamburger menu */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;