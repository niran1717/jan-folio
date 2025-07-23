// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';


function App() {
  return (
    <div className="font-mono antialiased text-black bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;