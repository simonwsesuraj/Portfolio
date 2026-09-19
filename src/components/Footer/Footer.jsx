import { personalInfo } from '../../data/portfolioData';
import { FaLinkedin, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
          
          <div className="text-center text-md-start">
            <h5 className="footer-brand m-0">{personalInfo.name}</h5>
            <p className="footer-sub m-0">
              Full Stack Developer · Oracle DBA · AI & ML Engineer
            </p>
          </div>

          <div className="d-flex gap-3">
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link linkedin"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link github"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href={personalInfo.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link instagram"
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </a>
          </div>

          <button 
            onClick={scrollToTop} 
            className="btn-back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FaArrowUp size={11} />
          </button>

        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React 19 & Vite.
        </div>
      </div>
    </footer>
  );
}
