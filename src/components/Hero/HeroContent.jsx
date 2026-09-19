import { personalInfo } from '../../data/portfolioData';
import { 
  FaFileDownload, 
  FaCopy, 
  FaCheck, 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaArrowRight, 
  FaGraduationCap 
} from "react-icons/fa";

export default function HeroContent({ onCopyEmail, copied }) {
  return (
    <div className="text-center text-lg-start" data-aos="fade-right">
      {/* Status Pill */}
      <div className="d-inline-block mb-3">
        <div className="hero-status-pill">
          <span className="status-dot"></span>
          <span>Available for Full-Time Roles · Trichy & Remote</span>
        </div>
      </div>

      {/* Main Visible Name */}
      <h1 className="hero-title mb-2">
        Hi, I'm {personalInfo.name}
      </h1>

      {/* Subtitle Roles */}
      <div className="hero-subtitle mb-3">
        Full Stack Developer · Oracle DBA · AI Engineer
      </div>

      {/* Academic Credential Tag */}
      <div className="mb-4">
        <div className="hero-academic-tag">
          <FaGraduationCap className="text-cyan" />
          <span>M.Sc in Computer Science · St. Joseph's College (<span className="academic-score">CGPA 8.64</span>)</span>
        </div>
      </div>

      {/* Clear, Readable Bio Paragraph */}
      <p className="hero-bio mb-4">
        {personalInfo.bio}
      </p>

      {/* High-Contrast Action Buttons */}
      <div className="hero-actions-row mb-4">
        <a href="#projects" className="btn-hero-primary">
          Explore Projects <FaArrowRight size={13} />
        </a>

        <a 
          href={personalInfo.resumePdf} 
          download="Simon_Sesuraj_Resume.pdf" 
          className="btn-hero-secondary"
          title="Download full resume PDF"
        >
          <FaFileDownload size={13} /> Download CV
        </a>

        <button 
          onClick={onCopyEmail} 
          className={`btn-hero-copy ${copied ? 'copied' : ''}`}
          title="Copy email address"
        >
          {copied ? <FaCheck size={13} /> : <FaCopy size={13} />}
          <span>{copied ? "Copied!" : "Copy Email"}</span>
        </button>
      </div>

      {/* Social Row */}
      <div className="hero-socials-row">
        <span className="social-label">Connect:</span>
        <a 
          href={personalInfo.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hero-social-link linkedin"
          aria-label="LinkedIn Profile"
          title="Connect on LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href={personalInfo.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hero-social-link github"
          aria-label="GitHub Profile"
          title="View GitHub Repositories"
        >
          <FaGithub />
        </a>
        <a 
          href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hero-social-link whatsapp"
          aria-label="WhatsApp Chat"
          title="Direct WhatsApp Chat"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
