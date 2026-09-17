import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { FaFileDownload, FaPaperPlane, FaBars, FaTimes } from "react-icons/fa";
import './Header.css';

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["#home", "#about", "#projects", "#resume", "#certifications", "#contact"];
      sections.forEach((section) => {
        const el = document.querySelector(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills & Resume", href: "#resume" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`site-header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar-container">
          {/* Brand */}
          <a href="#home" className="header-brand" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="brand-dot"></span>
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-badge d-none d-md-inline-block">Full Stack · DBA · AI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link-item ${activeLink === link.href ? "active" : ""}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="header-actions">
              <a
                href={personalInfo.resumePdf}
                download="Simon_Sesuraj_Resume.pdf"
                className="btn-header-resume"
                title="Download Resume"
              >
                <FaFileDownload /> CV
              </a>
              <a href="#contact" className="btn-header-contact">
                <FaPaperPlane /> Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn d-lg-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`mobile-link ${activeLink === link.href ? "active" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-actions">
              <a
                href={personalInfo.resumePdf}
                download="Simon_Sesuraj_Resume.pdf"
                className="btn-header-resume w-100 justify-content-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaFileDownload /> Download CV
              </a>
              <a
                href="#contact"
                className="btn-header-contact w-100 justify-content-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaPaperPlane /> Let's Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}