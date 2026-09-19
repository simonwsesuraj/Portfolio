import { useState } from "react";
import { skillsData } from "../../data/portfolioData";
import { FaCode, FaDatabase, FaBrain, FaTools } from "react-icons/fa";

export default function SkillsMatrix() {
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
    const groupName = skillTabs.find(t => t.id === activeSkillCategory)?.label || "";
    return (skillsData[activeSkillCategory] || []).map(s => ({ ...s, group: groupName }));
  };

  const currentSkills = getFilteredSkills();

  return (
    <div className="skills-matrix-wrap glass-card p-4 p-md-5" data-aos="fade-up">
      <div className="text-center mb-4">
        <h3 className="font-heading fw-bold text-white mb-2">Technical Proficiency Matrix</h3>
        <p className="text-muted small">Verified tools, frameworks, and database technologies</p>
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
            <div className="skill-tech-card">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="skill-tech-name">{skill.name}</span>
                <span className="skill-badge-domain">{skill.group}</span>
              </div>
              {skill.desc && (
                <div className="skill-tech-desc">{skill.desc}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
