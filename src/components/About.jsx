import { FaCode, FaDatabase, FaBrain, FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import './About.css';

export default function About() {
  const pillars = [
    {
      id: "fullstack",
      title: "Full Stack Engineering",
      icon: <FaCode className="pillar-card-icon text-cyan" />,
      tagline: "Scalable Web Applications",
      tech: "React · Django · REST APIs · Bootstrap",
      points: [
        "Responsive, component-driven frontend architecture with clean state patterns",
        "Secure backend RESTful APIs with Django ORM and JWT authentication",
        "Performance optimization, sub-second load times, and mobile-first layouts"
      ]
    },
   {
      id: "dba",
      title: "Oracle Database Administration",
      icon: <FaDatabase className="pillar-card-icon text-amber" />,
      tagline: "Enterprise Relational Systems",
      tech: "Oracle 19c/21c · SQL · Linux · RMAN · Data Guard",
      points: [
        "Oracle Database architecture, SGA components, background processes, and database instance management",
        "Database creation, startup and shutdown, tablespaces, datafiles, and storage administration",
        "SQL, user management, privileges, listener configuration, and basic database security administration",
        "Cold backup, hot backup, RMAN backup and recovery, and database recovery procedures",
        "Foundational Oracle Data Guard concepts and Linux-based Oracle Database administration"
      ]
    },
    {
      id: "ai",
      title: "Artificial Intelligence & ML",
      icon: <FaBrain className="pillar-card-icon text-emerald" />,
      tagline: "Predictive Analytics & Microservices",
      tech: "FastAPI · Scikit-learn · Pandas · Python",
      points: [
        "End-to-end ML model pipelines from exploratory data analysis to inference",
        "Asynchronous high-throughput REST APIs built with FastAPI and Swagger",
        "Data wrangling, regression, classification, and statistical evaluation"
      ]
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge">Professional Background</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging high-performance frontend interfaces, robust enterprise databases, and intelligent machine learning microservices.
          </p>
        </div>

        <div className="row g-4 align-items-center mb-5">
          
          {/* Left: Summary & Philosophy */}
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <div className="about-bio-card glass-card p-4 p-md-5">
              <h3 className="font-heading fw-bold mb-3">
                Engineering across the <span className="text-gradient">full technical spectrum</span>
              </h3>
              
              <p className="about-text mb-3">
                Hello! I'm <strong>Simon Sesuraj</strong>, an analytical software developer based in Trichy, India.
                Currently pursuing my Master's degree in Computer Science with an academic standing of <strong>CGPA 8.64</strong>, 
                I focus on architecting resilient end-to-end software solutions.
              </p>

              <p className="about-text mb-4">
                What sets my profile apart for technical recruiters is my balanced capability across 
                <strong> frontend/backend web engineering</strong>, deep foundational understanding of 
                <strong> enterprise Oracle databases & SQL query optimization</strong>, and applied 
                <strong> AI/machine learning deployment</strong> with FastAPI.
              </p>

              <div className="about-credentials-box p-3 rounded-3 mb-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="cred-icon-wrap">
                    <FaGraduationCap size={22} className="text-cyan" />
                  </div>
                  <div>
                    <div className="cred-title">St. Joseph's College (Autonomous), Trichy</div>
                    <div className="cred-sub">M.Sc Computer Science (CGPA: 8.64) · B.Sc Computer Science (CGPA: 7.14)</div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="btn-about-action">
                  View Case Studies
                </a>
                <a href="#contact" className="btn-about-outline">
                  Let's Discuss Opportunities
                </a>
              </div>
            </div>
          </div>

          {/* Right: 3 Pillars Grid */}
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <div className="d-flex flex-column gap-3">
              {pillars.map((pillar) => (
                <div key={pillar.id} className="pillar-detail-card glass-card p-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-3">
                      {pillar.icon}
                      <div>
                        <h4 className="pillar-title m-0">{pillar.title}</h4>
                        <span className="pillar-tagline">{pillar.tagline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pillar-tech-badge mb-3">
                    {pillar.tech}
                  </div>

                  <ul className="pillar-points-list m-0 p-0">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="pillar-point-item">
                        <FaCheckCircle className="point-check" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}