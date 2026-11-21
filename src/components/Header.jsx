
import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

import {
  FaFileDownload,
  FaBars,
  FaTimes
} from "react-icons/fa";

import "./Header.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills & Resume", href: "#resume" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];

export default function Header() {

  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --------------------------------
  // SCROLL DETECTION
  // --------------------------------

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 40);

      let currentSection = "#home";

      navLinks.forEach((link) => {

        const section = document.querySelector(link.href);

        if (section) {

          const rect = section.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom > 160) {
            currentSection = link.href;
          }

        }

      });

      setActiveLink(currentSection);

    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  // --------------------------------
  // CLOSE MOBILE MENU
  // --------------------------------

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // --------------------------------
  // HEADER UI
  // --------------------------------

  return (

    <header
      className={`site-header ${isScrolled ? "header-scrolled" : ""}`}
    >

      <div className="container">

        <nav className="navbar-container" aria-label="Main navigation">

          {/* BRAND */}

          <a
            href="#home"
            className="header-brand"
            title="Simon Sesuraj - Professional Portfolio"
            onClick={closeMobileMenu}
          >

            <span className="brand-logo">
              S
            </span>

            <span className="brand-content">

              <span className="brand-name">
                {personalInfo.name}
              </span>

              <span className="brand-designation">
                AI & ML <span>·</span> ORACLE DBA <span>·</span> FULL STACK
              </span>

            </span>

          </a>


          {/* DESKTOP NAVIGATION */}

          <div className="nav-desktop">

            <ul className="nav-links">

              {navLinks.map((link) => (

                <li key={link.href}>

                  <a
                    href={link.href}
                    className={`nav-link-item ${
                      activeLink === link.href ? "active" : ""
                    }`}
                    aria-current={
                      activeLink === link.href ? "location" : undefined
                    }
                  >

                    {link.name}

                  </a>

                </li>

              ))}

            </ul>


            {/* HEADER CTA */}

            <div className="header-actions">

              <a
                href={personalInfo.resumePdf}
                download="Simon_Sesuraj_Resume.pdf"
                className="btn-header-resume"
                title="Download my resume"
              >

                <FaFileDownload />

                <span>Download CV</span>

              </a>

            </div>

          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >

            {isMobileMenuOpen
              ? <FaTimes />
              : <FaBars />
            }

          </button>

        </nav>


        {/* MOBILE NAVIGATION */}

        <div
          id="mobile-navigation"
          className={`mobile-menu-drawer ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
          aria-hidden={!isMobileMenuOpen}
        >

          <ul className="mobile-nav-links">

            {navLinks.map((link) => (

              <li key={link.href}>

                <a
                  href={link.href}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className={`mobile-link ${
                    activeLink === link.href ? "active" : ""
                  }`}
                  aria-current={
                    activeLink === link.href ? "location" : undefined
                  }
                  onClick={closeMobileMenu}
                >

                  <span>{link.name}</span>

                  {activeLink === link.href && (
                    <span className="mobile-active-dot"></span>
                  )}

                </a>

              </li>

            ))}

          </ul>


          {/* MOBILE CTA */}

          <div className="mobile-actions">

            <a
              href={personalInfo.resumePdf}
              download="Simon_Sesuraj_Resume.pdf"
              className="btn-header-resume mobile-resume-btn"
              onClick={closeMobileMenu}
            >

              <FaFileDownload />

              Download Resume

            </a>

          </div>

          <div className="mobile-footer">

            <span>AI & ML</span>
            <span>Oracle DBA</span>
            <span>Full Stack</span>

          </div>

        </div>

      </div>

    </header>

  );

}
