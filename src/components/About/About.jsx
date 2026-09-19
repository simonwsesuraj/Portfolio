import { 
  FaGraduationCap, 
  FaCode, 
  FaDatabase, 
  FaBrain, 
  FaCheckCircle, 
  FaArrowRight 
} from "react-icons/fa";
import './About.css';

export default function About() {
  const disciplines = [
    {
      title: "Full Stack Web Engineering",
      icon: <FaCode className="text-cyan fs-5" />,
      tech: "React 19 · Django · REST APIs",
      points: [
        "Component-driven responsive architectures with React 19 and modern CSS",
        "Secure backend RESTful APIs with Django ORM and JWT authentication",
        "Performance optimization, sub-second load times, and mobile-first layouts"
      ]
    },
    {
      title: "Enterprise Oracle Database Administration",
      icon: <FaDatabase className="text-amber fs-5" />,
      tech: "Oracle 19c/21c · SQL · RMAN · Linux",
      points: [
        "Oracle Database architecture, SGA components, storage & instance management",
        "Complex SQL query optimization, Explain Plan analysis, and index strategies",
        "Disaster recovery procedures with RMAN, backup strategies, and security configuration"
      ]
    },
    {
      title: "Artificial Intelligence & ML Microservices",
      icon: <FaBrain className="text-emerald fs-5" />,
      tech: "FastAPI · Scikit-learn · Pandas · Python",
      points: [
        "Predictive model training, evaluation, and serialization with Scikit-learn",
        "High-performance asynchronous inference endpoints served with FastAPI",
        "Data wrangling, feature engineering, and statistical analysis with Pandas & NumPy"
      ]
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge">Professional Background</div>
          <h2 className="section-title">About Me & Technical Disciplines</h2>
          <p className="section-subtitle">
            Bridging high-performance frontend interfaces, robust enterprise databases, and intelligent machine learning microservices.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          {/* Left Column: Academic Foundation & Philosophy */}
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <div className="about-card h-100">
              <h3 className="about-card-title">
                Engineering Across The Full Technical Spectrum
              </h3>

              <p className="about-text">
                Hello! I'm <strong>Simon Sesuraj</strong>, an analytical software developer based in Trichy, India. 
                Currently pursuing my Master's degree in Computer Science with an academic standing of <strong>CGPA 8.64</strong>, 
                I focus on architecting resilient, production-ready software solutions.
              </p>

              <p className="about-text">
                What sets my profile apart for technical recruiters is my balanced capability across 
                <strong> frontend/backend web engineering</strong>, enterprise 
                <strong> Oracle databases & SQL query optimization</strong>, and applied 
                <strong> AI/machine learning deployment</strong> with FastAPI.
              </p>

              {/* Academic Highlight Box */}
              <div className="about-academic-box">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded-3 bg-dark">
                    <FaGraduationCap size={26} className="text-cyan" />
                  </div>
                  <div>
                    <div className="academic-title">St. Joseph's College (Autonomous), Trichy</div>
                    <div className="academic-sub">
                      M.Sc Computer Science (<span className="academic-badge">CGPA: 8.64</span>) · B.Sc Computer Science (<span className="academic-badge">CGPA: 7.14</span>)
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#projects" className="btn-about-action">
                  View Featured Projects <FaArrowRight size={12} className="ms-1" />
                </a>
                <a href="#contact" className="btn-about-outline">
                  Let's Discuss Opportunities
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Distinct Engineering Pillars */}
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <div className="d-flex flex-column">
              {disciplines.map((item, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-card-header">
                    <div className="d-flex align-items-center gap-2">
                      {item.icon}
                      <h4 className="pillar-card-title">{item.title}</h4>
                    </div>
                    <span className="pillar-tech-badge">{item.tech}</span>
                  </div>

                  <ul className="pillar-points">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="pillar-point">
                        <FaCheckCircle className="pillar-check" />
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
