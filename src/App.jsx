import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SEOHelmet from './components/SEOHelmet';
function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <>
     <SEOHelmet/>
     <Header/>
     <Hero/>
     <About/>
     <Projects/>
     <Resume/>
     <Certifications/>
     <Contact/>
    </>
  )
}

export default App
