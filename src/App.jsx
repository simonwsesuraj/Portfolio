import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SEOHelmet from './components/SEOHelmet';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <>
      <SEOHelmet />
      <div className="ambient-glow" aria-hidden="true"></div>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
