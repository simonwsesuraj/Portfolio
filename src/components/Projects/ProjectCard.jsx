import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, onOpenModal }) {
  const categoryBadgeClass = 
    project.category === 'dba' ? 'badge-dba' :
    project.category === 'ai' ? 'badge-ai' : 'badge-fullstack';

  return (
    <div className="project-card">
      {/* Project Screenshot with Category Badge */}
      <div 
        className="project-img-wrap"
        onClick={() => onOpenModal(project)}
        title="Click to view details"
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-cover-img"
          loading="lazy"
        />
        <span className={`project-category-badge ${categoryBadgeClass}`}>
          {project.categoryLabel || project.category.toUpperCase()}
        </span>
      </div>

      {/* Card Body */}
      <div className="project-body">
        {/* Tech Stack List */}
        <div className="tech-tags-list">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span key={i} className="project-tech-tag">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="project-tech-tag">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Pure White, Readable Title */}
        <h4 className="project-title font-heading">
          {project.title}
        </h4>

        {/* High-Contrast Description */}
        <p className="project-description">
          {project.description}
        </p>

        {/* Recruiter Details Trigger */}
        {project.highlights && project.highlights.length > 0 && (
          <button
            className="btn-inspect-details"
            onClick={() => onOpenModal(project)}
          >
            View Highlights & Architecture →
          </button>
        )}

        {/* Action Buttons */}
        <div className="project-actions-row">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action-source"
          >
            <FaGithub /> Source Code
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action-live"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
