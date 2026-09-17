import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  FaFileDownload, 
  FaCopy, 
  FaCheck, 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaArrowRight, 
  FaDatabase, 
  FaCode, 
  FaBrain 
} from "react-icons/fa";
import './Hero.css';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  // Rotating title
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-7 text-center text-lg-start" data-aos="fade-right">
            
            {/* Status Badge */}
            <div className="hero-status-badge mb-3">
              <span className="status-indicator"></span>
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title font-heading mb-3">
              Hi, I'm <span className="hero-name-gradient">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Animated Role Subheading */}
            <div className="hero-role-wrapper mb-4">
              <span className="role-prefix">Specializing in </span>
              <span className="role-highlight">
                {personalInfo.titles[activeRoleIndex]}
              </span>
            </div>

            {/* Bio summary */}
            <p className="hero-bio mb-4">
              {personalInfo.bio}
            </p>

            {/* Three Core Competency Chips */}
            <div className="hero-pillars-row mb-4">
              <div className="pillar-chip">
                <FaCode className="pillar-icon text-cyan" />
                <span>Full Stack (React & Django)</span>
              </div>
              <div className="pillar-chip">
                <FaDatabase className="pillar-icon text-amber" />
                <span>Oracle DBA (SQL)</span>
              </div>
              <div className="pillar-chip">
                <FaBrain className="pillar-icon text-emerald" />
                <span>AI & ML (FastAPI/Scikit)</span>
              </div>
            </div>

            {/* Recruiter Action Buttons */}
            <div className="hero-actions-container mb-4">
              <a href="#projects" className="btn-hero-primary">
                Explore Projects <FaArrowRight />
              </a>

              <a 
                href={personalInfo.resumePdf} 
                download="Simon_Sesuraj_Resume.pdf" 
                className="btn-hero-secondary"
                title="Download verified resume"
              >
                <FaFileDownload /> Download CV
              </a>

              <button 
                onClick={handleCopyEmail} 
                className={`btn-hero-copy ${copied ? 'copied' : ''}`}
                title="Copy email to clipboard"
              >
                {copied ? <FaCheck /> : <FaCopy />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social Links & Direct Connect */}
            <div className="hero-socials-row">
              <span className="social-label">Connect:</span>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link linkedin"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link github"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link whatsapp"
                aria-label="WhatsApp Chat"
              >
                <FaWhatsapp />
              </a>
            </div>

          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="col-12 col-lg-5 text-center" data-aos="fade-left">
            <div className="hero-image-wrapper">
              
              {/* Outer Decorative Glow Rings */}
              <div className="avatar-glow-ring"></div>
              
              <div className="hero-avatar-frame">
                <img 
                  src={personalInfo.avatar} 
                  alt={personalInfo.name}
                  className="hero-avatar-img"
                  loading="eager"
                />
              </div>

              {/* Floating Highlight Badges
              <div className="floating-badge badge-top-right">
                <div className="badge-icon-wrap dba">
                  <FaDatabase />
                </div>
                <div className="badge-text">
                  <div className="badge-title">Oracle DBA</div>
                  <div className="badge-sub">SQL · Tuning . Backup & Recovery</div>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left">
                <div className="badge-icon-wrap ai">
                  <FaBrain />
                </div>
                <div className="badge-text">
                  <div className="badge-title">AI & ML Engineer</div>
                  <div className="badge-sub">FastAPI · Scikit-learn</div>
                </div>
              </div> */}

            </div>

            {/* Quick Stats Grid under image for recruiters */}
            <div className="hero-stats-grid mt-4">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-val">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Floating Copied Toast */}
      {copied && (
        <div className="custom-toast">
          <FaCheck className="text-emerald" />
          <span>Email address copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}