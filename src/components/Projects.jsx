// src/components/Projects.jsx
import React from 'react';
import img1 from '../assets/png/image3.png';
import img2 from '../assets/png/Demo.png';
import img4 from '../assets/png/Pic1.gif'
import img5 from '../assets/png/image4.png'
import img6 from '../assets/png/mpe_simple_spread.gif'
import img7 from '../assets/png/image7.png'
import img8 from '../assets/png/Smart_Vault.png'
import img9 from '../assets/png/AI_Chatbot.png'
import img10 from '../assets/png/IntelliDoc.png'

// You might want to get this from a data file or API in a real app
const projects = [
  {
    id: 1,
    title: "Data-driven Decision-making in Autonomous Vehicles using LLMs",
    description: "Developed a modular pipeline using LLaMA 2-7B to enable real-time, risk-aware decision-making in autonomous vehicles. Processed over 200,000 driving scenarios from the Argoverse 2 dataset and extracted 2 million+ feature frames for analysis. Implemented few-shot prompting and a reflection module to revise decisions in 35% of ambiguous cases. Fine-tuned on 2,000+ annotated samples from the Waymo Open Motion Dataset, achieving an 18% improvement in edge case reasoning.",
    link: "https://github.com/niran1717/LLM_Framework_Autonomous_Vehicles.git", 
    imageUrl: img1 // Placeholder
  },
  {
    id: 2,
    title: 'Retrieval-Augmented LLM Study Assistant',
    description: 'This project is a Groq/LangChain Retrieval-Augmented Generation (RAG) System that builds a personalized, ephemeral knowledge base for on-demand Q&A. The Streamlit front-end allows users to upload PDFs, which are then processed by LangChain and embedded into an in-memory ChromaDB vector store. The system uses semantic search to retrieve relevant document chunks, which are fed to the LLaMA 3-70B model via the high-speed Groq API to generate accurate, contextual answers. Crucially, the in-session memory ensures the entire knowledge base is cleared after the user closes the browser, making the tool secure, private, and immediately ready for a new set of documents.',
    link: 'https://github.com/niran1717/AI_Study_Assistant.git',
    imageUrl: img2
},
  {
    id: 3,
    title: 'Deep Reinforcement Learning for Autonomous Driving',
    description: 'Designed and implemented a deep reinforcement learning model using DQN and CNN to train an autonomous driving agent in the CarRacing-v2 simulation environment. Utilized a replay buffer of 100,000 experiences and a decaying epsilon-greedy policy. Achieved a 45% improvement in average rewards over the baseline and a 95% track completion rate, demonstrating enhanced policy learning and control stability.',
    link: 'https://github.com/niran1717/CarRacing-v2-Epsilon-Greedy.git',
    imageUrl: img4
},
{
    id: 4,
    title: 'LiDAR-Based 3D Object Detection for Cooperative Perception',
    description: 'Built a 3D object detection pipeline using the PointPillar architecture to process LiDAR data from the TUMTraf-V2X Cooperative Perception Dataset. Engineered data preprocessing and target assignment modules for vehicle-only, infrastructure-only, and cooperative modes. Demonstrated up to 20% improvement in mAP through cooperative LiDAR fusion. Performance validated using BEV visualizations and benchmarked with Precision, Recall, and IoU.',
    link: 'https://github.com/niran1717/Cooperative_Perception_V2X.git',
    imageUrl: img5
},
{
    id: 5,
    title: 'Multi-Agent Policy Learning using MADDPG',
    description: 'Developed a cooperative multi-agent learning framework using Multi-Agent Deep Deterministic Policy Gradient (MADDPG) in PyTorch with OpenAI Gym environments. Achieved 38% improvement in policy stability and an 84% success rate in coordinated tasks, outperforming baseline reinforcement learning methods in cooperative multi-agent scenarios.',
    link: 'https://github.com/niran1717/Multi-Agent-Deep-Deterministic-Policy-Gradient-MADDPG-for-Cooperative-Multi-Agent-Learning.git',
    imageUrl: img6
},
{
    id: 6,
    title: 'AI Customer Service Chatbot - AWS',
    description: 'Fully serverless, intelligent customer service assistant built entirely on AWS services, leveraging Amazon Bedrock, Lambda, DynamoDB, API Gateway, and more.',
    link: 'https://github.com/niran1717/AI_Customer_Chatbot.git',
    imageUrl: img9
},
{
    id: 7,
    title: 'Silent Scalper - AWS',
    description: 'Silent Scalper is a fully serverless, event-driven architecture built on AWS to automate the validation, classification, and storage of uploaded job files. It provides instant scalability, eliminates idle compute costs, and ensures fault tolerance using modern AWS services like Lambda, API Gateway, S3, DynamoDB, CloudWatch, and SNS.',
    link: 'https://github.com/niran1717/Silent_Scalper_AWS.git',
    imageUrl: img7
},
{
    id: 8,
    title: 'Smart Vault Backup Engine - AWS',
    description: 'Smart Vault is a tool to automatically create and manage EBS snapshots for EC2 instances that are tagged for backup, while ensuring storage efficiency, monitoring, and fault alerts.',
    link: 'https://github.com/niran1717/Smart_Vault_AWS.git',
    imageUrl: img8
},

{
    id: 9,
    title: 'Intelligent Document Engine - AWS',
    description: 'AI-powered document understanding system built entirely on AWS. This project transforms unstructured documents into searchable, structured, and analyzable content using serverless architecture, machine learning, and natural language processing.',
    link: 'https://github.com/niran1717/Intelligent_Document_Engine_AWS.git',
    imageUrl: img10
},
];

function Projects() {
  return (
    <section id="projects" className="bg-white py-20 border-t border-black">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold font-serif text-shadow-lg text-black text-center mb-12">
          MY WORK
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-gray-100 p-6 rounded-2xl shadow-lg 
                         border border-gray-300 
                         hover:shadow-2xl hover:bg-gray-200 hover:border-black transition-all duration-300"
            >
              <h4 className="text-xl text-shadow-lg font-semibold text-black font-serif mb-5">
                {project.title}
              </h4>

              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-fill rounded-xl mb-4 shadow-xl" 
              />

              <p className="text-black font-serif text-shadow-sm text-base text-justify mb-4">
                {project.description}
              </p>
              <a 
                href={project.link} 
                className="inline-block bg-black text-white px-5 py-2 rounded-lg text-sm sm:text-sm font-mono font-bold
                       hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl animate-fadeIn delay-50"
              >
                VIEW PROJECT &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
