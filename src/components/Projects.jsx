import { useState, useMemo } from "react";
import { projects } from "../data/projectsData";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaSearch, 
  FaTimes, 
  FaCode, 
  FaDatabase, 
  FaBrain, 
  FaLayerGroup,
  FaCheckCircle
} from "react-icons/fa";
import './Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects", icon: <FaLayerGroup /> },
    { id: "fullstack", label: "Full Stack Web", icon: <FaCode /> },
    { id: "dba", label: "Oracle DBA", icon: <FaDatabase /> },
    { id: "ai", label: "AI & Machine Learning", icon: <FaBrain /> }
  ];

  // Instant filtering based on Category and Search Query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge">Case Studies & Production Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore web applications, enterprise database optimizations, and intelligent AI models engineered with industry best practices.
          </p>
        </div>

        {/* Recruiter Interactive Controls: Filter Tabs & Search */}
        <div className="projects-controls-container mb-5" data-aos="fade-up">
          
          {/* Category Filter Pills */}
          <div className="role-pills-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`role-pill ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="search-bar-wrap">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by tech or keyword (e.g. React, FastAPI, Oracle, Django)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="search-clear-btn" 
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.length === 0 ? (
            <div className="col-12 text-center py-5">
              <div className="no-projects-box glass-card p-5">
                <p className="fs-5 text-muted mb-3">No projects found matching your search filter.</p>
                <button
                  className="btn-clear-filters"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          ) : (
            filteredProjects.map((project, idx) => {
              const categoryBadgeClass = 
                project.category === 'dba' ? 'badge-dba' :
                project.category === 'ai' ? 'badge-ai' : 'badge-fullstack';

              return (
                <div 
                  key={project.id} 
                  className="col-12 col-md-6 col-lg-4" 
                  data-aos="fade-up"
                  data-aos-delay={(idx % 3) * 100}
                >
                  <div className="project-card glass-card h-100 d-flex flex-column">
                    
                    {/* Project Preview Image */}
                    <div className="project-img-container">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-cover-img"
                        loading="lazy"
                      />
                      
                      {/* Category Chip Overlay */}
                      <span className={`project-category-chip ${categoryBadgeClass}`}>
                        {project.categoryLabel || project.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      
                      {/* Tech Stack Pills */}
                      <div className="tech-tags-wrapper mb-3">
                        {project.tech.slice(0, 4).map((tech, i) => (
                          <span key={i} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="tech-pill tech-pill-more">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="project-card-title font-heading mb-2">
                        {project.title}
                      </h4>

                      {/* Description with clamp */}
                      <p className="project-card-desc mb-3 flex-grow-1">
                        {project.description}
                      </p>

                      {/* Recruiter Quick Details trigger */}
                      {project.highlights && project.highlights.length > 0 && (
                        <button
                          className="btn-view-details mb-3"
                          onClick={() => setActiveModalProject(project)}
                        >
                          View Architecture & Impact →
                        </button>
                      )}

                      {/* Action Links */}
                      <div className="project-links-row mt-auto pt-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-project-action github"
                          title={`${project.title} GitHub repository by Simon Sesuraj`}
                          aria-label={`View ${project.title} source code on Simon Sesuraj GitHub`}
                        >
                          <FaGithub /> Source Code
                        </a>

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project-action live"
                            title={`Launch ${project.title} live application`}
                            aria-label={`Launch ${project.title} live application`}
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Recruiter Project Case-Study Modal */}
      {activeModalProject && (
        <div className="project-modal-backdrop" onClick={() => setActiveModalProject(null)}>
          <div className="project-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
            
            <div className="project-modal-header">
              <div>
                <span className="text-gradient fw-bold text-uppercase fs-6">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="modal-project-title font-heading mt-1 mb-0">
                  {activeModalProject.title}
                </h3>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setActiveModalProject(null)}
                aria-label="Close project modal"
              >
                <FaTimes />
              </button>
            </div>

            <div className="project-modal-body">
              <div className="modal-img-wrap mb-4">
                <img 
                  src={activeModalProject.image} 
                  alt={activeModalProject.title} 
                  className="modal-img"
                />
              </div>

              <div className="mb-4">
                <h5 className="modal-section-title font-heading mb-2">Overview</h5>
                <p className="modal-desc mb-0">{activeModalProject.description}</p>
              </div>

              {activeModalProject.highlights && (
                <div className="mb-4">
                  <h5 className="modal-section-title font-heading mb-2">Technical Highlights & Architecture</h5>
                  <ul className="modal-highlights-list">
                    {activeModalProject.highlights.map((item, idx) => (
                      <li key={idx} className="highlight-item">
                        <FaCheckCircle className="text-cyan me-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-4">
                <h5 className="modal-section-title font-heading mb-2">Technologies Used</h5>
                <div className="d-flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill py-1 px-3 fs-6">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-modal-footer">
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-action github"
              >
                <FaGithub className="me-2" /> View Repository
              </a>
              {activeModalProject.live && (
                <a
                  href={activeModalProject.live}
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
      )}
    </section>
  );
}