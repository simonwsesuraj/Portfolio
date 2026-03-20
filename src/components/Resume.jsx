import { FaDownload } from "react-icons/fa";
import './Resume.css';
import resume from '../assets/Resume/resume.pdf';

export default function Resume() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Django", level: 85 },
    { name: "Bootstrap", level: 85 },
    { name: "Python", level: 95 },
    { name: "Java", level: 90 },
    { name: "Machine Learning", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Pandas & NumPy", level: 90 },
    { name: "Matplotlib / Seaborn", level: 85 },
  ];

  const hobbies = [
    { title: "Reading Books" },
    
  ];

  const education = [
    {
      degree: "B.Sc Computer Science",
      institution: "St. Joseph's College,(Autonomous) Trichy",
      duration: "2022 - 2025",
      cgp :"CGP : 7.14"
    },
    {
      degree: "M.Sc Computer Science",
      institution: "St. Joseph's College,(Autonomous) Trichy",
      duration: "2025 - 2027",
      cgp :"CGP : 8.64"
    }
  ];

  return (
    <section className="resume-section py-5 text-white" id="resume">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5 fade-in" data-aos="fade-up">
          <h2 className="fw-bold resume-title">Resume</h2>
          <p className="text-gradient">Education, Experience & Skills</p>
          <a href={resume} download className="btn btn-primary mt-3 resume-btn">
            <FaDownload className="me-2" /> Download CV
          </a>
        </div>

        {/* Timeline */}
        <div className="row mb-5">

          {/* Education */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-4 section-title">Education</h4>
            {education.map((item, index) => (
              <div key={index} className="timeline-item mb-4 fade-in">
                <div className="timeline-icon"></div>
                <small className="text-info">{item.duration}</small>
                <h5>{item.degree}</h5>
                <small className="text-info">{item.institution}</small>
                <p className="text-gradient fw-bold">{item.cgp}</p>
              </div>
            ))}
          </div>
        
          {/* Hobbies */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-4 section-title">Hobbies</h4>
            {hobbies.map((item, index) => (
              <div key={index} className="timeline-item mb-4 fade-in hover-card">
                <h5 className="text-gradient">{item.title}</h5>
              </div>
            ))}
          </div>

        </div>

        {/* Skills */}
        <div className="skills-section">
          <h4 className="fw-bold mb-4 text-center section-title fade-in">Skills</h4>
          <div className="row g-3">
            {skills.map((skill, index) => (
              <div key={index} className="col-12 col-md-6 fade-in">
                <div className="skill-bar hover-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}