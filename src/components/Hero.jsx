
import { useState } from "react";
import { personalInfo } from "../data/portfolioData";

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
  FaBrain,
  FaGraduationCap,
  FaEnvelope
} from "react-icons/fa";

import "./Hero.css";

export default function Hero() {

  const [copied, setCopied] = useState(false);

  // --------------------------------
  // COPY EMAIL
  // --------------------------------

  const handleCopyEmail = async () => {

    try {

      await navigator.clipboard.writeText(personalInfo.email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {

      console.error("Unable to copy email:", error);

    }

  };


  return (

    <section className="hero-section" id="home">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* =================================
              LEFT CONTENT
          ================================= */}

          <div
            className="col-12 col-lg-7"
            data-aos="fade-right"
          >

            {/* STATUS */}

            <div className="hero-status-badge">

              <span className="status-indicator"></span>

              <span>
                {personalInfo.statusBadge || "Open to Opportunities"}
              </span>

            </div>


            {/* INTRODUCTION */}

            <p className="hero-intro">
              HELLO, I'M
            </p>


            {/* NAME */}

            <h1 className="hero-title">

              {personalInfo.name}

              <span className="hero-title-dot">.</span>

            </h1>


            {/* PROFESSIONAL HEADLINE */}

            <h2 className="hero-headline">

              Building Intelligent Applications
              <span className="headline-break"> & Reliable Systems.</span>

            </h2>


            {/* PROFESSIONAL DESCRIPTION */}

            <p className="hero-bio">

              Computer Science postgraduate passionate about developing
              intelligent applications, building modern web solutions,
              and managing reliable database systems.

              Exploring the intersection of
              <strong> AI & Machine Learning</strong>,
              <strong> Oracle Database Administration</strong>,
              and <strong> Full Stack Development</strong>.

            </p>


            {/* EDUCATION */}

            <div className="hero-education">

              <FaGraduationCap />

              <span>
                M.Sc. Computer Science
              </span>

              <span className="education-divider">·</span>

              <span>
                St. Joseph's College, Trichy
              </span>

            </div>


            {/* =================================
                SPECIALIZATION CARDS
            ================================= */}

            <div className="hero-specializations">

              {/* AI & ML */}

              <div className="specialization-card">

                <div className="specialization-icon ai-icon">
                  <FaBrain />
                </div>

                <div className="specialization-content">

                  <h3>AI & Machine Learning</h3>

                  <p>Python · Scikit-learn · FastAPI</p>

                </div>

              </div>


              {/* ORACLE DBA */}

              <div className="specialization-card">

                <div className="specialization-icon dba-icon">
                  <FaDatabase />
                </div>

                <div className="specialization-content">

                  <h3>Oracle Database Administration</h3>

                  <p>Oracle 19c/21c · SQL · RMAN</p>

                </div>

              </div>


              {/* FULL STACK */}

              <div className="specialization-card">

                <div className="specialization-icon fullstack-icon">
                  <FaCode />
                </div>

                <div className="specialization-content">

                  <h3>Full Stack Development</h3>

                  <p>React · Django · REST APIs</p>

                </div>

              </div>

            </div>


            {/* =================================
                ACTION BUTTONS
            ================================= */}

            <div className="hero-actions">

              <a
                href="#projects"
                className="hero-btn-primary"
              >

                Explore My Projects

                <FaArrowRight />

              </a>


              <a
                href={personalInfo.resumePdf}
                download="Simon_Sesuraj_Resume.pdf"
                className="hero-btn-secondary"
              >

                <FaFileDownload />

                Download CV

              </a>

            </div>


            {/* =================================
                SOCIAL LINKS
            ================================= */}

            <div className="hero-social-section">

              <span className="social-heading">
                Let's connect
              </span>


              <div className="hero-social-links">

                {/* EMAIL */}

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="hero-social-link"
                  title="Copy email address"
                  aria-label="Copy email address"
                >

                  {copied ? <FaCheck /> : <FaEnvelope />}

                  <span>
                    {copied ? "Copied" : "Email"}
                  </span>

                </button>


                {/* LINKEDIN */}

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >

                  <FaLinkedin />

                  <span>LinkedIn</span>

                </a>


                {/* GITHUB */}

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="GitHub profile"
                  title="GitHub"
                >

                  <FaGithub />

                  <span>GitHub</span>

                </a>


                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="Contact through WhatsApp"
                  title="WhatsApp"
                >

                  <FaWhatsapp />

                  <span>WhatsApp</span>

                </a>

              </div>

            </div>

          </div>


          {/* =================================
              RIGHT PROFILE SECTION
          ================================= */}

          <div
            className="col-12 col-lg-5"
            data-aos="fade-left"
          >

            <div className="hero-profile-area">


              {/* PROFILE IMAGE */}

              <div className="hero-profile-card">

                <div className="profile-image-container">

                  <img
                    src={personalInfo.avatar}
                    alt={`${personalInfo.name} - Professional profile`}
                    className="hero-profile-image"
                    loading="eager"
                  />

                </div>


                {/* IMAGE OVERLAY */}

                <div className="profile-overlay">

                  <span className="profile-overlay-label">
                    COMPUTER SCIENCE
                  </span>

                  <h3>
                    Passionate about
                    <br />
                    Technology & Innovation.
                  </h3>

                </div>

              </div>


              {/* FLOATING TECHNOLOGY BADGES */}

              <div className="floating-tech-card tech-card-top">

                <FaBrain className="floating-ai-icon" />

                <div>
                  <strong>AI & ML</strong>
                  <span>Intelligent Solutions</span>
                </div>

              </div>


              <div className="floating-tech-card tech-card-bottom">

                <FaDatabase className="floating-db-icon" />

                <div>
                  <strong>Oracle DBA</strong>
                  <span>Database Management</span>
                </div>

              </div>


              {/* BOTTOM PROFILE CAPTION */}

              <div className="profile-caption">

                <div className="profile-caption-icon">
                  <FaCode />
                </div>

                <div>

                  <strong>Developer & Database Enthusiast</strong>

                  <span>
                    Learning · Building · Improving
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* SCROLL INDICATOR */}

      <a
        href="#about"
        className="hero-scroll-indicator"
        aria-label="Scroll to About section"
      >

        <span></span>

        Scroll to explore

      </a>

    </section>

  );

}
