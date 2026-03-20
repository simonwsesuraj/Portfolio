import HeroImg from '../assets/hero.jpg';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import './Hero.css';

export default function Hero() {
  return (
    <section className="text-white hero-section" id="home">
      <div className='container py-5'>
        <div className='row align-items-center'>
          
          {/* LEFT SIDE */}
          <div className='col-12 col-lg-6 text-center text-lg-start'>
            <h1 className="fw-bold display-5">
              Hi,<br />
              I'm <span className="text-primary">Simon Sesuraj</span>
            </h1>

            <p>
              I'm a passionate developer who loves creating innovative solutions.
            </p>

            {/* Buttons */}
            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-primary fw-bold">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-light fw-bold">
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-4 mt-4 justify-content-center justify-content-lg-start">
              <a 
                href="https://www.linkedin.com/in/simonwsesuraj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" social-icon social-icon-linkedin"
              >
                <AiFillLinkedin />
              </a>

              <a 
                href="https://github.com/simonwsesuraj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon social-icon-github"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='col-12 col-lg-6 text-center mt-4 mt-lg-0'>
            <img 
              src={HeroImg} 
              className="img-fluid hero-img" 
              alt="Hero" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}