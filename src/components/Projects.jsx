
import { useState, useMemo, useEffect } from "react";

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

import "./Projects.css";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  // --------------------------------
  // PROJECT CATEGORIES
  // --------------------------------

  const categories = [
    {
      id: "all",
      label: "All Projects",
      icon: <FaLayerGroup />
    },
    {
      id: "fullstack",
      label: "Full Stack",
      icon: <FaCode />
    },
    {
      id: "dba",
      label: "Oracle DBA",
      icon: <FaDatabase />
    },
    {
      id: "ai",
      label: "AI & ML",
      icon: <FaBrain />
    }
  ];

  // --------------------------------
  // FILTER PROJECTS
  // --------------------------------

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.category === selectedCategory;

      const searchableText = [
        project.title,
        project.description,
        ...(project.tech || [])
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // --------------------------------
  // CLOSE MODAL WITH ESCAPE KEY
  // --------------------------------

  useEffect(() => {
    if (!activeModalProject) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveModalProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeModalProject]);

  // --------------------------------
  // RESET FILTERS
  // --------------------------------

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  // --------------------------------
  // GET CATEGORY BADGE CLASS
  // --------------------------------

  const getCategoryBadge = (category) => {
    switch (category) {
      case "dba":
        return "badge-dba";

      case "ai":
        return "badge-ai";

      default:
        return "badge-fullstack";
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* =================================
            SECTION HEADING
        ================================= */}

        <div className="text-center mb-5" data-aos="fade-up">

          <div className="section-badge">
            SELECTED WORK
          </div>

          <h2 className="section-title">
            My Projects
          </h2>

          <p className="section-subtitle">
            A selection of projects where I apply my skills in
            web development, database management, and
            Python-based machine learning.
          </p>

        </div>

        {/* =================================
            FILTERS AND SEARCH
        ================================= */}

        <div
          className="projects-controls-container mb-5"
          data-aos="fade-up"
        >

          {/* Category filters */}

          <div
            className="role-pills-container"
            role="group"
            aria-label="Filter projects by category"
          >

            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`role-pill ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
              >
                {category.icon}

                <span>{category.label}</span>
              </button>
            ))}

          </div>

          {/* Search */}

          <div className="search-bar-wrap">

            <FaSearch className="search-icon" />

            <input
              type="text"
              className="search-input"
              placeholder="Search projects, technologies..."
              aria-label="Search projects by name, description, or technology"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />

            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}

          </div>

        </div>

        {/* =================================
            PROJECT RESULTS
        ================================= */}

        <div
          className="row g-4"
          aria-live="polite"
        >

          {filteredProjects.length === 0 ? (

            /* Empty state */

            <div className="col-12 text-center py-5">

              <div className="no-projects-box">

                <h3>No Projects Found</h3>

                <p>
                  No projects match your current search or category.
                  Try another keyword or reset the filters.
                </p>

                <button
                  type="button"
                  className="btn-clear-filters"
                  onClick={handleResetFilters}
                >
                  Reset Filters
                </button>

              </div>

            </div>

          ) : (

            filteredProjects.map((project, index) => (

              <div
                key={project.id}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >

                <article className="project-card h-100 d-flex flex-column">

                  {/* Project image */}

                  <div className="project-img-container">

                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="project-cover-img"
                      loading="lazy"
                    />

                    <span
                      className={`project-category-chip ${getCategoryBadge(
                        project.category
                      )}`}
                    >
                      {project.categoryLabel ||
                        project.category.toUpperCase()}
                    </span>

                  </div>

                  {/* Project information */}

                  <div className="project-card-body p-4 d-flex flex-column flex-grow-1">

                    {/* Technologies */}

                    <div className="tech-tags-wrapper mb-3">

                      {(project.tech || []).slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="tech-pill"
                        >
                          {tech}
                        </span>
                      ))}

                      {project.tech?.length > 4 && (
                        <span className="tech-pill tech-pill-more">
                          +{project.tech.length - 4}
                        </span>
                      )}

                    </div>

                    {/* Title */}

                    <h3 className="project-card-title">
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p className="project-card-desc">
                      {project.description}
                    </p>

                    {/* Technical details */}

                    {project.highlights?.length > 0 && (
                      <button
                        type="button"
                        className="btn-view-details mb-3"
                        onClick={() => setActiveModalProject(project)}
                        aria-label={`View technical details of ${project.title}`}
                      >
                        View Technical Details
                        <span aria-hidden="true"> →</span>
                      </button>
                    )}

                    {/* Project links */}

                    <div className="project-links-row mt-auto">

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-project-action github"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <FaGithub />
                          <span>Source Code</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-project-action live"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}

                    </div>

                  </div>

                </article>

              </div>

            ))

          )}

        </div>

        {/* =================================
            PROJECT DETAILS MODAL
        ================================= */}

        {activeModalProject && (

          <div
            className="project-modal-backdrop"
            onClick={() => setActiveModalProject(null)}
          >

            <div
              className="project-modal-box"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
            >

              {/* Modal header */}

              <div className="project-modal-header">

                <div>

                  <span className="modal-category">
                    {activeModalProject.categoryLabel ||
                      activeModalProject.category.toUpperCase()}
                  </span>

                  <h3
                    id="project-modal-title"
                    className="modal-project-title"
                  >
                    {activeModalProject.title}
                  </h3>

                </div>

                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close project details"
                >
                  <FaTimes />
                </button>

              </div>

              {/* Modal content */}

              <div className="project-modal-body">

                {/* Image */}

                <div className="modal-img-wrap mb-4">

                  <img
                    src={activeModalProject.image}
                    alt={`${activeModalProject.title} project screenshot`}
                    className="modal-img"
                  />

                </div>

                {/* Overview */}

                <div className="modal-content-section mb-4">

                  <h4 className="modal-section-title">
                    Project Overview
                  </h4>

                  <p className="modal-desc">
                    {activeModalProject.description}
                  </p>

                </div>

                {/* Technical highlights */}

                {activeModalProject.highlights?.length > 0 && (

                  <div className="modal-content-section mb-4">

                    <h4 className="modal-section-title">
                      Technical Highlights
                    </h4>

                    <ul className="modal-highlights-list">

                      {activeModalProject.highlights.map((item, index) => (

                        <li
                          key={index}
                          className="highlight-item"
                        >
                          <FaCheckCircle />
                          <span>{item}</span>
                        </li>

                      ))}

                    </ul>

                  </div>

                )}

                {/* Technologies */}

                <div className="modal-content-section mb-4">

                  <h4 className="modal-section-title">
                    Technologies Used
                  </h4>

                  <div className="modal-tech-list">

                    {(activeModalProject.tech || []).map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

              {/* Modal footer */}

              <div className="project-modal-footer">

                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modal-action github"
                  >
                    <FaGithub />
                    View Repository
                  </a>
                )}

                {activeModalProject.live && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modal-action live"
                  >
                    <FaExternalLinkAlt />
                    Live Application
                  </a>
                )}

              </div>

            </div>

          </div>

        )}

      </div>
    </section>
  );
}
