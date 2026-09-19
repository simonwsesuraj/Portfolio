import { FaGraduationCap } from "react-icons/fa";
import { education } from "../../data/portfolioData";

export default function EducationTimeline() {
  return (
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
  );
}
