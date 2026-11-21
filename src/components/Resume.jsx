
import { useState } from "react";
import {
  personalInfo,
  skillsData,
  education
} from "../data/portfolioData";

import {
  FaFileDownload,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaBrain,
  FaTools
} from "react-icons/fa";

import "./Resume.css";

const skillCategories = [
  { id: "all", label: "All Skills", icon: <FaCode /> },
  { id: "fullstack", label: "Full Stack", icon: <FaCode /> },
  { id: "dba", label: "Oracle DBA", icon: <FaDatabase /> },
  { id: "ai", label: "AI & ML", icon: <FaBrain /> },
  { id: "tools", label: "Tools", icon: <FaTools /> }
];

const skillGroups = [
  { id: "fullstack", title: "Full Stack Development" },
  { id: "dba", title: "Oracle Database Administration" },
  { id: "ai", title: "AI & Machine Learning" },
  { id: "tools", title: "Tools & Technologies" }
];

export default function Resume() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeCategory);

  return (
    <section className="resume-section" id="resume">
      <div className="container">

        {/* Section Heading */}
        <div className="resume-heading text-center" data-aos="fade-up">
          <span className="resume-eyebrow">MY BACKGROUND</span>

          <h2 className="section-title">Resume</h2>

          <p className="resume-subtitle">
            My academic background, practical training, and technical skills.
          </p>

          <a
            href={personalInfo.resumePdf}
            download="Simon_Sesuraj_Resume.pdf"
            className="btn-download-resume"
          >
            <FaFileDownload />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Education and Internship */}
        <div className="row g-4 resume-overview">

          {/* Education */}
          <div className="col-12 col-lg-7" data-aos="fade-up">
            <div className="resume-card h-100">

              <div className="resume-card-heading">
                <div className="resume-icon education-icon">
                  <FaGraduationCap />
                </div>

                <div>
                  <h3>Education</h3>
                  <p>Academic qualifications</p>
                </div>
              </div>

              <div className="education-timeline">
                {education.map((item, index) => (
                  <div className="education-item" key={index}>
                    <div className="education-dot"></div>

                    <div className="education-content">
                      <div className="education-top">
                        <h4>{item.degree}</h4>

                        {item.score && (
                          <span className="education-score">
                            {item.score}
                          </span>
                        )}
                      </div>

                      <p className="education-institution">
                        {item.institution}
                      </p>

                      <span className="education-duration">
                        {item.duration}
                      </span>

                      {item.highlights && (
                        <p className="education-description">
                          {item.highlights}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Practical Training */}
          <div className="col-12 col-lg-5" data-aos="fade-up">
            <div className="resume-card h-100">

              <div className="resume-card-heading">
                <div className="resume-icon experience-icon">
                  <FaBriefcase />
                </div>

                <div>
                  <h3>Practical Training</h3>
                  <p>Industry exposure</p>
                </div>
              </div>

              <div className="internship-content">
                <span className="internship-label">
                  30-Day Internship
                </span>

                <h4>Oracle Database Administration</h4>

                <p className="internship-company">
                  Snow Leaf Solutions Pvt Ltd
                </p>

                <p className="internship-description">
                  Gained practical exposure to Oracle database
                  administration and Linux-based database operations.
                </p>

                <div className="internship-topics">
                  <span>Oracle Database</span>
                  <span>SQL</span>
                  <span>Linux</span>
                  <span>Tablespaces</span>
                  <span>RMAN</span>
                  <span>Backup & Recovery</span>
                  <span>Data Guard</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Technical Skills */}
        <div className="resume-skills-card" data-aos="fade-up">

          <div className="skills-heading text-center">
            <span className="resume-eyebrow">WHAT I WORK WITH</span>

            <h3>Technical Skills</h3>

            <p>
              Technologies and tools across my areas of interest.
            </p>
          </div>

          {/* Skill Filters */}
          <div className="skills-filter">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`skill-filter-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Skill Groups */}
          <div className="skills-groups">
            {visibleGroups.map((group) => {
              const skills = skillsData[group.id] || [];

              if (skills.length === 0) return null;

              return (
                <div className="skill-group" key={group.id}>
                  <h4>{group.title}</h4>

                  <div className="skill-tags">
                    {skills.map((skill, index) => (
                      <span className="skill-tag" key={index}>
                        {typeof skill === "string"
                          ? skill
                          : skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
