// src/components/Skills.jsx
import React from 'react';
import Marquee from "react-fast-marquee";

// --- START: Consolidated Image Imports and Skills Data ---

// Image files - make sure these paths are correct relative to Skills.jsx
import html from '../assets/skills/html.svg';
import docker from '../assets/skills/docker.svg';
import css from '../assets/skills/css.svg';
import javascript from '../assets/skills/javascript.svg';
import react from '../assets/skills/react.svg';
import mysql from '../assets/skills/mysql.svg';
import tailwind from '../assets/skills/tailwind.svg';
import vitejs from '../assets/skills/vitejs.svg';
import c from '../assets/skills/c.svg'; // 'c.svg' is imported for 'C++'
import cplusplus from '../assets/skills/cplusplus.svg'; // Keeping this if 'c.svg' doesn't look right for 'C++'
import python from '../assets/skills/python.svg';
import aws from '../assets/skills/aws.svg';
import git from '../assets/skills/git.svg';
import numpy from '../assets/skills/numpy.svg';
import opencv from '../assets/skills/opencv.svg';
import pytorch from '../assets/skills/pytorch.svg';
import tensorflow from '../assets/skills/tensorflow.svg';
import microsoftoffice from '../assets/skills/microsoftoffice.svg';
import canva from '../assets/skills/canva.svg';


// Define your skills data directly here
const skillsData = [
    'AWS',
    'Docker',
    'Python',
    'MySQL',
    'Pytorch',
    'Tensorflow',
    'Numpy',
    'OpenCV',
    'Git',
    'HTML',
    'CSS',
    'React',
    'C++'
];

// Map skill names to their imported image paths
const skillToImageMap = {
    'AWS': aws,
    'Docker': docker,
    'Python': python,
    'MySQL': mysql,
    'Pytorch': pytorch,
    'Tensorflow': tensorflow,
    'Numpy': numpy,
    'OpenCV': opencv,
    'Git': git,
    'HTML': html,
    'CSS': css,
    'React': react,
    'C++': cplusplus, // Using cplusplus.svg for 'C++'
    // Add other skills if you expand skillsData:
    'Javascript': javascript,
    'Tailwind': tailwind,
    'Vitejs': vitejs,
    'Microsoft Office': microsoftoffice,
    'Canva': canva,
    // 'C': c, // If you ever add 'C' as a separate skill
};

// Function to get the image source based on skill name
const getSkillImage = (skill) => {
    return skillToImageMap[skill] || ''; // Return empty string if skill not found
};

// --- END: Consolidated Image Imports and Skills Data ---


function Skills() {
    // Removed ThemeContext as per previous modifications
    // const { theme } = useContext(ThemeContext);

    return (
        <section id="skills" className="py-20 bg-white border-t border-black">
            <div className="container mx-auto px-8">
                {/* Skills Header */}
                <div className="text-center mb-2">
                    <h2 className="text-4xl font-serif text-shadow-lg font-extrabold text-gray-900 mb-2">
                        SKILLS
                    </h2>
                </div>

                {/* Skills Container with Marquee */}
                <div className="skillsContainer w-full overflow-visible"> {/* Full width for marquee */}
                    <Marquee
                        gradient={true}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div
                                className="skill--box flex flex-col m-15 items-center justify-center p-6 mx-5 w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-xl shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-110
 hover:bg-gray-200"
                                key={id}
                            >
                                <img
                                    src={getSkillImage(skill)} // Using the new internal getSkillImage
                                    alt={skill}
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2"
                                />
                                <h3 className="text-base md:text-lg font-mono text-shadow-sm text-black text-center font-medium">
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

export default Skills;