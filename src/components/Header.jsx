import { useState, useEffect } from "react";
import './Header.css';

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");

  // Scroll spy to highlight current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home","#about","#projects","#resume","#certifications","#contact"];
      sections.forEach(section => {
        const el = document.querySelector(section);
        if(el){
          const top = el.getBoundingClientRect().top;
          if(top >= 0 && top < window.innerHeight/2){
            setActiveLink(section);
          }
        }
      });
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top px-3">
      {/* Brand */}
      <a className="navbar-brand fw-bold header-brand " href="#home">
        Simon Sesuraj
      </a>

      {/* Toggler */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-lg-3">
          {["home","about","projects","resume","certifications","contact"].map((link) => (
            <li key={link} className="nav-item mobile-border">
              <a
                href={`#${link}`}
                className={`nav-link fw-bold ${activeLink === `#${link}` ? "active-link" : ""}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}