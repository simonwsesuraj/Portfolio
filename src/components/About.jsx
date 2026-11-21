
import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaGraduationCap,
  FaArrowRight
} from "react-icons/fa";

import "./About.css";

export default function About() {
  const pillars = [
    {
      id: "fullstack",
      title: "Full Stack Development",
      subtitle: "Building web applications",
      icon: <FaCode />,
      color: "fullstack",
      technologies: ["React", "Django", "REST APIs", "Bootstrap"],
      description:
        "Developing responsive user interfaces and backend services, connecting frontend applications with REST APIs and databases."
    },
    {
      id: "dba",
      title: "Oracle Database Administration",
      subtitle: "Database management and operations",
      icon: <FaDatabase />,
      color: "dba",
      technologies: ["Oracle 19c/21c", "SQL", "Linux", "RMAN"],
      description:
        "Working with Oracle database architecture, instance management, storage administration, backup and recovery, and Data Guard fundamentals."
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      subtitle: "Practical data-driven solutions",
      icon: <FaBrain />,
      color: "ai",
      technologies: ["Python", "Scikit-learn", "Pandas", "FastAPI"],
      description:
        "Building practical machine learning workflows, preparing datasets, exploring predictive models, and developing APIs for model integration."
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">

        {/* Section heading */}
        <div className="about-heading" data-aos="fade-up">
          <span className="about-eyebrow">GET TO KNOW ME</span>

          <h2 className="about-section-title">
            About <span>Me</span>
          </h2>

          <p className="about-section-description">
            A Computer Science postgraduate interested in building
            useful software, working with databases, and exploring
            practical applications of AI and Machine Learning.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* Professional introduction */}
          <div className="col-12 col-lg-5" data-aos="fade-right">
            <div className="about-intro-card h-100">

              <span className="about-card-label">
                PROFESSIONAL PROFILE
              </span>

              <h3 className="about-intro-title">
                Turning ideas into
                <span> practical technology solutions.</span>
              </h3>

              <p className="about-intro-text">
                I'm Simon Sesuraj, a Computer Science postgraduate
                based in Trichy, India. I enjoy developing applications
                and understanding how the systems behind them work.
              </p>

              <p className="about-intro-text">
                My technical interests span full stack development
                with React and Django, Oracle database administration,
                and Python-based AI and Machine Learning projects.
                I focus on strengthening my fundamentals through
                hands-on learning and practical projects.
              </p>

              {/* Education */}
              <div className="about-education">
                <div className="about-education-icon">
                  <FaGraduationCap />
                </div>

                <div>
                  <span className="about-education-label">
                    EDUCATION
                  </span>

                  <h4>St. Joseph's College (Autonomous)</h4>

                  <p>
                    M.Sc. Computer Science · 2025–2027
                  </p>

                  <p>
                    B.Sc. Computer Science · 2022–2025
                  </p>
                </div>
              </div>

              {/* Action links */}
              <div className="about-actions">
                <a href="#projects" className="about-primary-btn">
                  Explore Projects
                  <FaArrowRight />
                </a>

                <a href="#contact" className="about-secondary-btn">
                  Contact Me
                </a>
              </div>

            </div>
          </div>

          {/* Specialization cards */}
          <div className="col-12 col-lg-7" data-aos="fade-left">
            <div className="about-specializations">

              <div className="about-specializations-heading">
                <span>WHAT I WORK WITH</span>
                <h3>Areas of Focus</h3>
              </div>

              {pillars.map((pillar, index) => (
                <article
                  className="about-pillar-card"
                  key={pillar.id}
                >
                  <div className={`about-pillar-icon ${pillar.color}`}>
                    {pillar.icon}
                  </div>

                  <div className="about-pillar-content">

                    <div className="about-pillar-top">
                      <div>
                        <span className="about-pillar-number">
                          0{index + 1}
                        </span>

                        <h4>{pillar.title}</h4>

                        <p className="about-pillar-subtitle">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="about-pillar-description">
                      {pillar.description}
                    </p>

                    <div className="about-tech-list">
                      {pillar.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
