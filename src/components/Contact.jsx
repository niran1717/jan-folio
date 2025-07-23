// src/components/Contact.jsx
import React from 'react';
import handshake from '../assets/png/Handshake.png'; // Make sure this path is correct!

function Contact() {
  return (
    <section id="contact" className="bg-white py-20 border-t border-gray-900">
      <div className="container mx-auto px-8
                  grid grid-cols-1 md:grid-cols-2 items-start gap-8"> {/* Changed to grid layout */}

        {/* Left Column: Text Content and Buttons */}
        <div className="text-center mx-10 py-10"> {/* Align text left */}
          <h3 className="text-4xl font-serif text-shadow-lg font-extrabold text-black mb-6">
            GET IN TOUCH
          </h3>
          <p className="text-xl text-shadow-md font-serif text-black leading-relaxed text-justify mb-8"> {/* Removed text-justify to align left */}
            I'm always up for a good conversation. Whether it's a groundbreaking project, a potential collab, or just to share your most hilarious debugging story, my inbox is open. (And yes, I actually read them.)
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"> {/* Changed justify-center to justify-start */}
            <a
              href="mailto:nparamas@purdue.edu"
              className="inline-block bg-black text-white px-5 py-2 rounded-lg text-sm sm:text-lg font-mono font-bold
                         hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl animate-fadeIn delay-50"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/niran17/"
              target="_blank"
              rel="noopener noreferrer" /* Added rel for security best practices */
              className="inline-block bg-black text-white px-5 py-2 rounded-lg text-sm sm:text-lg font-mono font-bold
                         hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl animate-fadeIn delay-50"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/niran1717"
              target="_blank"
              rel="noopener noreferrer" /* Added rel for security best practices */
              className="inline-block bg-black text-white px-5 py-2 rounded-lg text-sm sm:text-lg font-mono font-bold
                         hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl animate-fadeIn delay-50"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full mt-[-60px]">
          
          <div className="flex justify-center items-center w-full min-h-[250px] md:min-h-[400px]">
              <img
                src = {handshake}
                alt="Contact Section Illustration"
                className="w-full h-auto max-w-sm object-contain"
              />
          </div>

    
          <div className="text-center mt-[-60px] px-10">
            <p className="text-lg text-shadow-sm font-mono font-medium italic text-black">
              "You can have everything in life you want, if you will just help other people get what they want."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;