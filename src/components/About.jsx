// src/components/About.jsx
import React from 'react';
import img from '../assets/png/Robo.png'; // Make sure this path is correct!


function About() {
  return (
    // Using 'bg-white' for this section for subtle contrast against 'bg-custom-beige'
    <section id="about" className="bg-white py-24 border-t border-gray-900">
        
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-start gap-16">

        {/* Left Column: Illustration Placeholder AND Quotes */}
        <div className="flex flex-col justify-center items-center h-full"> {/* Changed to flex-col to stack */}
        {/* Your Illustration Placeholder */}
        <div className="flex justify-center items-center w-full min-h-[250px] md:min-h-[400px] mb-8 mt-[-80px] "> {/* Added mb-8 for space */}
            <img
                src={img}
                alt="About Section Illustration"
                className="w-full h-auto max-w-sm object-contain"
            />
        </div>

        {/* START OF QUOTES CODE TO INSERT */}
        <div className="text-center mt-[-120px] px-10"> {/* mt-auto pushes it to bottom of flex column if space */}
            <p className="text-lg text-shadow-sm font-mono font-medium italic text-black mb-2">
            "The most exciting breakthroughs come from connecting seemingly unrelated ideas."
            </p>
        
            {/* You can add more quotes or rotate them if you wish */}
            {/* <p className="text-lg font-serif italic text-dark-text opacity-80 mt-4 mb-2">
            "Build solutions that deliver real-time insights."
            </p>
            <p className="text-sm font-sans text-gray-600">
            — Your Personal Motto
            </p>
            */}
        </div>
        {/* END OF QUOTES CODE */}

        </div>


        {/* Right Column: Text Content, now justified */}
        <div className="text-center py-5"> {/* Adjusted padding for alignment */}
          <h3 className="text-4xl font-serif text-shadow-lg font-extrabold text-gray-900 mb-8">
            ABOUT ME
          </h3>
          <p className="text-lg text-shadow-sm font-serif text-black leading-relaxed mb-6 text-justify">
            Hi, I’m Niranjan - Master’s student in <strong>Autonomy Engineering</strong> at Purdue University, passionate about building intelligent systems that scale.

            Where others see code and cloud as separate worlds, I see a synergy. I’ve used <strong>Large Language Models</strong> to steer decision-making in autonomous vehicles, fine-tuned on 200K+ real-world scenarios. But what hooked me wasn’t just the AI; it was the <strong>infrastructure</strong> behind the intelligence. That fascination drew me deeper into AWS, where I now build scalable, resilient solutions that can deliver ML insights in real time. I’m certified in <strong>AWS</strong> (Certified Cloud Practitioner), skilled in deploying ML workflows, and always exploring the edge between innovation and production-ready systems.
          </p>
         
          <p className="text-lg text-shadow-sm font-serif text-black leading-relaxed text-justify">
          Beyond the algorithms, I find creative flow in capturing candid moments through mobile photography, the strategic energy of pickleball, and the quiet precision of occasional sketching.
          </p>
        </div>
        </div>
    </section>
  );
}

export default About;