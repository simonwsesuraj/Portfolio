import { useState } from "react";
import { personalInfo, skillsData, education } from "../data/portfolioData";
import { 
  FaFileDownload, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaDatabase, 
  FaBrain, 
  FaTools,
  FaCheckCircle
} from "react-icons/fa";
import './Resume.css';

export default function Resume() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  const skillTabs = [
    { id: "all", label: "All Skills", icon: <FaCode /> },
    { id: "fullstack", label: "Full Stack", icon: <FaCode /> },
    { id: "dba", label: "Oracle DBA", icon: <FaDatabase /> },
    { id: "ai", label: "AI & ML", icon: <FaBrain /> },
    { id: "tools", label: "Tools & DevOps", icon: <FaTools /> }
  ];

  const getFilteredSkills = () => {
    if (activeSkillCategory === "all") {
      return [
        ...skillsData.fullstack.map(s => ({ ...s, group: "Full Stack" })),
        ...skillsData.dba.map(s => ({ ...s, group: "Oracle DBA" })),
        ...skillsData.ai.map(s => ({ ...s, group: "AI & ML" })),
        ...skillsData.tools.map(s => ({ ...s, group: "Tools & DevOps" }))
      ];
    }
    return skillsData[activeSkillCategory] || [];
  };

  const currentSkills = getFilteredSkills();

  return (
    <section className="resume-section" id="resume">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge">Verified Credentials</div>
          <h2 className="section-title">Skills & Qualifications</h2>
          <p className="section-subtitle">
            Comprehensive breakdown of software proficiencies, enterprise database competencies, and academic background.
          </p>

          <div className="mt-4">
            <a
              href={personalInfo.resumePdf}
              download="Simon_Sesuraj_Resume.pdf"
              className="btn-download-resume"
              title="Download Full Resume PDF"
            >
              <FaFileDownload className="me-2" /> Download Complete Resume
            </a>
          </div>
        </div>

        {/* Education & Experience Timeline Grid */}
        <div className="row g-4 mb-5">
          
          {/* Education Column */}
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <div className="timeline-card glass-card p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="timeline-header-icon education">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <h3 className="timeline-section-title m-0">Academic Qualifications</h3>
                  <small className="text-muted">Degree & Academic Performance</small>
                </div>
              </div>

              <div className="timeline-container">
                {education.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
                        <h4 className="timeline-title m-0">{item.degree}</h4>
                        <span className="timeline-badge-score">{item.score}</span>
                      </div>
                      <div className="timeline-institution mb-2">{item.institution}</div>
                      <div className="timeline-date mb-2">{item.duration}</div>
                      <p className="timeline-details m-0">{item.highlights}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Practical Focus & Highlights Column */}
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <div className="timeline-card glass-card p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="timeline-header-icon experience">
                  <FaBriefcase size={22} />
                </div>
                <div>
                  <h3 className="timeline-section-title m-0">Core Competencies</h3>
                  <small className="text-muted">Recruiter Focus Areas</small>
                </div>
              </div>

              <div className="key-competency-list d-flex flex-column gap-3">
                <div className="competency-box">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <FaCheckCircle className="text-cyan" />
                    <h5 className="m-0 text-white fw-bold">Full Stack Web Architecture</h5>
                  </div>
                  <p className="text-muted small m-0 ps-4">
                    Experienced in building production-grade frontend interfaces with React 19, coupled with scalable Django/Python REST backends and secure relational storage.
                  </p>
                </div>

                <div className="competency-box">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <FaCheckCircle className="text-amber" />
                    <h5 className="m-0 text-white fw-bold">Enterprise Oracle Administration</h5>
                  </div>
                  <p className="text-muted small m-0 ps-4">
                    Trained in schema normalization, complex SQL analytical querying, stored PL/SQL procedures, and database performance tuning using Explain Plans and cost optimization.
                  </p>
                </div>

                <div className="competency-box">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <FaCheckCircle className="text-emerald" />
                    <h5 className="m-0 text-white fw-bold">Machine Learning & Microservices</h5>
                  </div>
                  <p className="text-muted small m-0 ps-4">
                    Adept at creating predictive models with Scikit-learn, cleaning high-dimensional datasets with Pandas, and deploying asynchronous low-latency REST endpoints using FastAPI.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Skills Matrix */}
        <div className="skills-matrix-wrap glass-card p-4 p-md-5" data-aos="fade-up">
          <div className="text-center mb-4">
            <h3 className="font-heading fw-bold text-white mb-2">Technical Proficiency Matrix</h3>
            <p className="text-muted small">Select a domain to inspect specific tools and framework proficiencies</p>
          </div>

          {/* Skill Filter Tabs */}
          <div className="role-pills-container mb-4">
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                className={`role-pill ${activeSkillCategory === tab.id ? "active" : ""}`}
                onClick={() => setActiveSkillCategory(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="row g-3">
            {currentSkills.map((skill, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="skill-meter-card p-3 rounded-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="skill-title fw-bold text-white">{skill.name}</span>
                    <span className="skill-percentage font-mono">{skill.level}%</span>
                  </div>

                  <div className="skill-track mb-2">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  {skill.desc && (
                    <div className="skill-desc-text text-muted small">{skill.desc}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}