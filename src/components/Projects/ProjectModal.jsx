import { FaTimes, FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
        
        <div className="project-modal-header">
          <div>
            <span className="text-gradient fw-bold text-uppercase fs-6">
              {project.categoryLabel}
            </span>
            <h3 className="modal-project-title font-heading mt-1 mb-0">
              {project.title}
            </h3>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close project modal"
          >
            <FaTimes />
          </button>
        </div>

        <div className="project-modal-body">
          <div className="modal-img-wrap mb-4">
            <img 
              src={project.image} 
              alt={project.title} 
              className="modal-img"
            />
          </div>

          <div className="mb-4">
            <h5 className="fw-bold text-white mb-2">Overview</h5>
            <p className="text-muted">{project.description}</p>
          </div>

          {project.highlights && (
            <div className="mb-4">
              <h5 className="fw-bold text-white mb-2">Technical Highlights & Architecture</h5>
              <ul className="modal-highlights-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <FaCheckCircle className="text-cyan me-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <h5 className="fw-bold text-white mb-2">Technologies Used</h5>
            <div className="d-flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-pill py-1 px-3 fs-6">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-modal-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modal-action github"
          >
            <FaGithub className="me-2" /> View Repository
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modal-action live"
            >
              <FaExternalLinkAlt className="me-2" /> Launch Live App
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
