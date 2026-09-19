import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

export default function CompetencyHighlights() {
  const competencies = [
    {
      title: "Full Stack Web Architecture",
      colorClass: "text-cyan",
      desc: "Experienced in building production-grade frontend interfaces with React 19, coupled with scalable Django/Python REST backends and secure relational storage."
    },
    {
      title: "Enterprise Oracle Administration",
      colorClass: "text-amber",
      desc: "Trained in schema normalization, complex SQL analytical querying, stored PL/SQL procedures, and database performance tuning using Explain Plans and cost optimization."
    },
    {
      title: "Machine Learning & Microservices",
      colorClass: "text-emerald",
      desc: "Adept at creating predictive models with Scikit-learn, cleaning high-dimensional datasets with Pandas, and deploying asynchronous low-latency REST endpoints using FastAPI."
    }
  ];

  return (
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

      <div className="d-flex flex-column gap-3">
        {competencies.map((comp, idx) => (
          <div key={idx} className="competency-box">
            <div className="d-flex align-items-center gap-2 mb-1">
              <FaCheckCircle className={comp.colorClass} />
              <h5 className="m-0 text-white fw-bold">{comp.title}</h5>
            </div>
            <p className="text-muted small m-0 ps-4">
              {comp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
